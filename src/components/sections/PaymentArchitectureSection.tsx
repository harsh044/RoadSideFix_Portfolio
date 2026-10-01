import React, { useState } from 'react';
import {
  CreditCard,
  ShieldCheck,
  Percent,
  CheckCircle,
  DollarSign,
  ArrowRight,
  RotateCcw,
  FileText,
  Lock,
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

interface PaymentStep {
  step: number;
  title: string;
  subhead: string;
  description: string;
  actor: 'Client' | 'FastAPI Backend' | 'Razorpay' | 'Bank';
}

const PAYMENT_STEPS: PaymentStep[] = [
  {
    step: 1,
    title: 'Server-Side Quote Calculation',
    subhead: 'Dynamic fee generation',
    description: 'When service is marked complete, FastAPI calculates total based on base service rate, distance callout factor, and parts used. Never trusted to client input.',
    actor: 'FastAPI Backend',
  },
  {
    step: 2,
    title: 'Razorpay Order Creation',
    subhead: 'Cryptographic order_id',
    description: 'FastAPI invokes Razorpay Orders API to generate an authenticated order_id, setting exact amount, currency, and receipt metadata.',
    actor: 'Razorpay',
  },
  {
    step: 3,
    title: 'Customer Checkout',
    subhead: 'Card, UPI & Netbanking',
    description: 'Customer completes payment via Razorpay native Flutter checkout. Payment ID and signature are returned to the client app.',
    actor: 'Client',
  },
  {
    step: 4,
    title: 'HMAC Signature Verification',
    subhead: 'Cryptographic tamper check',
    description: 'FastAPI verifies razorpay_signature using HMAC SHA-256 with the secret key. If valid, request state mutates to PAID.',
    actor: 'FastAPI Backend',
  },
  {
    step: 5,
    title: 'Platform Commission Split',
    subhead: '15% platform fee deduction',
    description: 'Automated ledger entry records 15% platform commission and allocates 85% directly to the technician’s pending earnings balance.',
    actor: 'FastAPI Backend',
  },
  {
    step: 6,
    title: 'Provider Settlement & Payout',
    subhead: 'Automated ACH / Bank transfer',
    description: 'Settled earnings are batched and transferred to the provider’s registered commercial bank account on daily/weekly schedules.',
    actor: 'Bank',
  },
];

export const PaymentArchitectureSection: React.FC = () => {
  const [demoAmount, setDemoAmount] = useState<number>(60);
  const platformFee = +(demoAmount * 0.15).toFixed(2);
  const providerPayout = +(demoAmount * 0.85).toFixed(2);

  return (
    <section id="payments" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Financial Engineering"
          title="Secure Service Payments & Automated Settlements"
          description="Transparent, automated checkout with server-side signature verification. Eliminates roadside cash arguments with digital escrow, upfront quotes, and automated technician payouts."
        />

        {/* Financial Flow Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {PAYMENT_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-400">
                    STEP 0{step.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {step.actor}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-0.5">{step.title}</h4>
                  <div className="text-xs text-blue-300 font-medium mb-2">{step.subhead}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Commission Split Calculator & Safeguard Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10">
          {/* Left: Interactive Split Demo */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              Automated Commission Split Simulator
            </h3>
            <p className="text-xs text-slate-400">
              Test how a completed roadside repair payment is automatically reconciled on the backend.
            </p>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Select Service Total:</span>
                <span className="font-mono text-white font-bold">${demoAmount}.00</span>
              </div>
              <input
                type="range"
                min="35"
                max="250"
                step="5"
                value={demoAmount}
                onChange={(e) => setDemoAmount(parseInt(e.target.value))}
                className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Split Breakdown Card */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Total Charged to Customer:</span>
                <span className="font-mono font-bold text-white text-sm">${demoAmount}.00</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Platform Commission (15%):
                </span>
                <span className="font-mono text-blue-400 font-bold">${platformFee.toFixed(2)}</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Provider Net Settlement (85%):
                </span>
                <span className="font-mono text-emerald-400 font-bold text-sm">
                  ${providerPayout.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Security Guarantees */}
          <div className="lg:col-span-6 space-y-3">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-xs">
              <div className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Zero Client Secrets in Flutter
              </div>
              <p className="text-slate-400 leading-relaxed">
                The mobile Flutter app only holds the public Razorpay Key ID. The Secret Key is strictly maintained on the FastAPI server within encrypted environment variables.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-xs">
              <div className="font-bold text-white flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-blue-400" />
                Automated Cancellation Refunds
              </div>
              <p className="text-slate-400 leading-relaxed">
                If a customer cancels before the provider starts driving, a full programmatic refund is issued via Razorpay Refunds API without customer support intervention.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-xs">
              <div className="font-bold text-white flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-indigo-400" />
                Double-Entry Audit Records
              </div>
              <p className="text-slate-400 leading-relaxed">
                Every transaction generates dual entries in PostgreSQL: an invoice record for the motorist and a credit settlement item for the technician.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
