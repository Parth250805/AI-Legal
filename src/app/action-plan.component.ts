import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type ImmediateAction = {
  readonly priority: string;
  readonly title: string;
  readonly rationale: string;
  readonly due: string;
};

@Component({
  selector: 'app-action-plan',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="min-h-screen bg-[#25272d] px-3 py-3 sm:px-5 sm:py-4">
      <div class="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[680px] items-center justify-center">
        <section
          class="flex min-h-[860px] w-full max-w-[648px] flex-col overflow-hidden rounded-[24px] border border-[#d8cbbc] bg-[#f7f1e8] shadow-[0_14px_40px_rgba(10,8,5,0.3)]"
          aria-label="Lexis Archive action plan screen"
        >
          <header class="flex items-center justify-between border-b border-[#e8ddd1] px-5 py-4 sm:px-6">
            <div class="flex items-center gap-2 text-[#3f241d]">
              <span class="flex size-5 items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 24 24" class="size-4 fill-current">
                  <path
                    d="M7.35 5.2 3.8 8.73l1.15 1.15 2.41-2.39 2.42 2.39 1.15-1.15L7.35 5.2Zm8.3 0-3.57 3.53 1.16 1.15 2.41-2.39 2.4 2.39 1.16-1.15-3.56-3.53ZM7.4 10.6l-3.6 3.56 1.16 1.16 2.44-2.4 2.38 2.4 1.17-1.16-3.55-3.56Zm5.95 1.3h6.85v1.64h-6.85V11.9Zm0 3.56h6.85v1.65h-6.85v-1.65Z"
                  />
                </svg>
              </span>
              <div class="text-[12px] font-semibold uppercase tracking-[0.22em]">Lexis Archive</div>
            </div>

            <button
              type="button"
              class="flex size-7 items-center justify-center rounded-full text-[#6e554d] transition hover:bg-[#efe6db] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30"
              aria-label="History"
            >
              <svg viewBox="0 0 24 24" class="size-4 stroke-current" fill="none" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 5.5v4h4" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.3v4.2l2.9 1.7" />
              </svg>
            </button>
          </header>

          <div class="flex flex-1 flex-col">
            <section class="flex-1 px-4 pb-6 pt-5 sm:px-5 sm:pt-6">
              <div class="border-b border-[#ece2d8] pb-4">
                <p class="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Legal Roadmap</p>
                <h1
                  class="mt-2 text-[38px] leading-[0.96] text-[#4a2b22]"
                  style="font-family: 'Cormorant Garamond', serif; font-weight: 600;"
                >
                  Action Plan
                </h1>
                <p class="mt-2 max-w-[470px] text-[12px] leading-5 text-[#8a7a70]">
                  A structured sequence of next steps based on the matter details provided.
                </p>
              </div>

              <section class="mt-5 rounded-[10px] border border-[#e8dfd7] bg-[#f3ede5] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Primary Recommendation</p>
                <h2 class="mt-3 text-[15px] font-semibold text-[#6c352c]">Issue a documented reply to the eviction notice before any filing window closes.</h2>
                <p class="mt-2 text-[11px] leading-5 text-[#6f5e54]">
                  Preserve the payment narrative, dispute unsupported arrears, and request ledger reconciliation while preparing a defense bundle.
                </p>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Immediate Actions</p>
                <div class="mt-4 space-y-3">
                  @for (item of immediateActions; track item.title) {
                    <article class="rounded-[6px] border border-[#ebe2d9] bg-[#f5f2ec] px-3 py-3">
                      <div class="flex items-start justify-between gap-3">
                        <div>
                          <p class="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#6c352c]">{{ item.priority }}</p>
                          <h3 class="mt-1 text-[12px] font-semibold text-[#4a2b22]">{{ item.title }}</h3>
                        </div>
                        <span class="text-[8px] uppercase tracking-[0.18em] text-[#9a8a80]">{{ item.due }}</span>
                      </div>
                      <p class="mt-2 text-[11px] leading-5 text-[#6f5e54]">{{ item.rationale }}</p>
                    </article>
                  }
                </div>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Documents to Prepare</p>
                <ul class="mt-4 space-y-2">
                  @for (document of documentsToPrepare; track document) {
                    <li class="flex items-start gap-2 rounded-[4px] border border-[#ebe2d9] bg-[#f5f2ec] px-3 py-2.5 text-[10px] leading-5 text-[#6f5e54]">
                      <span class="mt-[3px] size-1.5 rounded-full bg-[#6c352c]"></span>
                      <span>{{ document }}</span>
                    </li>
                  }
                </ul>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Legal Pathways</p>
                <div class="mt-4 space-y-3">
                  @for (pathway of legalPathways; track pathway.title) {
                    <div class="rounded-[6px] border border-[#ebe2d9] bg-[#f5f2ec] px-3 py-3">
                      <h3 class="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6c352c]">{{ pathway.title }}</h3>
                      <p class="mt-2 text-[11px] leading-5 text-[#6f5e54]">{{ pathway.description }}</p>
                    </div>
                  }
                </div>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#ead9d0] bg-[#f2ebe3] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Risk Notes</p>
                <p class="mt-3 text-[11px] leading-5 text-[#6f5e54]">
                  Missing bank proof for one month of maintenance may weaken the immediate response. Jurisdiction-specific rent control timelines and notice service requirements should be verified before filing.
                </p>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Consultation Questions</p>
                <ul class="mt-4 space-y-2 text-[10px] leading-5 text-[#6f5e54]">
                  @for (question of consultationQuestions; track question) {
                    <li class="flex gap-2">
                      <span class="mt-[7px] size-1.5 rounded-full bg-[#6c352c]"></span>
                      <span>{{ question }}</span>
                    </li>
                  }
                </ul>
              </section>

              <button
                type="button"
                class="mt-5 flex h-11 w-full items-center justify-center rounded-[4px] bg-[#6c352c] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#fffaf5] shadow-[0_6px_14px_rgba(92,54,41,0.24)] transition hover:bg-[#623128] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30"
              >
                Export Action Plan
              </button>
            </section>

            <nav class="mt-auto border-t border-[#ebe1d5] bg-[#f8f2ea] px-4 py-1.5 sm:px-5" aria-label="Primary">
              <ul class="grid grid-cols-3 items-end gap-1">
                <li>
                  <a
                    routerLink="/"
                    routerLinkActive
                    #chatLink="routerLinkActive"
                    [routerLinkActiveOptions]="{ exact: true }"
                    [class]="chatLink.isActive
                      ? 'mx-auto flex w-full max-w-[132px] flex-col items-center justify-center rounded-[6px] bg-[#efe7dd] px-3 py-1.5 text-[#6a3229] shadow-[0_3px_8px_rgba(110,73,55,0.06)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'
                      : 'mx-auto flex w-full max-w-[132px] flex-col items-center justify-center rounded-[6px] px-3 py-1.5 text-[#ab9a8f] transition hover:bg-[#f1e9df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'"
                  >
                    <span class="mb-0.5 flex h-4 items-center justify-center" aria-hidden="true">
                      <svg viewBox="0 0 24 24" class="size-[13px] stroke-current" fill="none" stroke-width="1.6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H9l-4 3v-3.3A2.5 2.5 0 0 1 3 12.5v-6Z" />
                      </svg>
                    </span>
                    <span class="text-[7px] font-semibold uppercase tracking-[0.22em]">Chat</span>
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/case-details"
                    routerLinkActive
                    #caseLink="routerLinkActive"
                    [class]="caseLink.isActive
                      ? 'mx-auto flex w-full max-w-[132px] flex-col items-center justify-center rounded-[6px] bg-[#efe7dd] px-3 py-1.5 text-[#6a3229] shadow-[0_3px_8px_rgba(110,73,55,0.06)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'
                      : 'mx-auto flex w-full max-w-[132px] flex-col items-center justify-center rounded-[6px] px-3 py-1.5 text-[#ab9a8f] transition hover:bg-[#f1e9df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'"
                  >
                    <span class="mb-0.5 flex h-4 items-center justify-center" aria-hidden="true">
                      <svg viewBox="0 0 24 24" class="size-[13px] stroke-current" fill="none" stroke-width="1.6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 4.5h8l4 4v10A1.5 1.5 0 0 1 17.5 20h-10A1.5 1.5 0 0 1 6 18.5v-12A2 2 0 0 1 8 4.5Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 4.5v4h4M9 12h6M9 15h4" />
                      </svg>
                    </span>
                    <span class="text-[7px] font-semibold uppercase tracking-[0.22em]">Case Details</span>
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/action-plan"
                    routerLinkActive
                    #planLink="routerLinkActive"
                    [class]="planLink.isActive
                      ? 'mx-auto flex w-full max-w-[132px] flex-col items-center justify-center rounded-[6px] bg-[#efe7dd] px-3 py-1.5 text-[#6a3229] shadow-[0_3px_8px_rgba(110,73,55,0.06)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'
                      : 'mx-auto flex w-full max-w-[132px] flex-col items-center justify-center rounded-[6px] px-3 py-1.5 text-[#ab9a8f] transition hover:bg-[#f1e9df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'"
                    aria-current="page"
                  >
                    <span class="mb-0.5 flex h-4 items-center justify-center" aria-hidden="true">
                      <svg viewBox="0 0 24 24" class="size-[13px] stroke-current" fill="none" stroke-width="1.6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 5.5h12A1.5 1.5 0 0 1 19.5 7v10A1.5 1.5 0 0 1 18 18.5H6A1.5 1.5 0 0 1 4.5 17V7A1.5 1.5 0 0 1 6 5.5Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 9h8M8 12h6M8 15h5" />
                      </svg>
                    </span>
                    <span class="text-[7px] font-semibold uppercase tracking-[0.22em]">Action Plan</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </main>
  `,
})
export class ActionPlanComponent {
  readonly immediateActions: readonly ImmediateAction[] = [
    {
      priority: 'Immediate',
      title: 'Prepare and send a notice reply',
      rationale: 'A documented response helps preserve objections to the alleged arrears and frames the dispute before escalation.',
      due: 'Today',
    },
    {
      priority: 'Within 3 Days',
      title: 'Assemble the payment chronology',
      rationale: 'Bank transfers, receipts, and email acknowledgements should be ordered month-by-month to close gaps in the narrative.',
      due: '3 days',
    },
    {
      priority: 'Within 5 Days',
      title: 'Brief counsel on possible rent-control defenses',
      rationale: 'Early issue spotting will clarify whether the matter is best resolved by reply, negotiation, or defensive filing.',
      due: '5 days',
    },
  ];

  readonly documentsToPrepare: readonly string[] = [
    'Signed tenancy agreement and renewal pages',
    'Ledger of rent and maintenance payments',
    'Copies of legal notice and envelope / service proof',
    'Threaded email and messaging correspondence',
    'Property inspection notes or occupancy records',
  ];

  readonly legalPathways: readonly { readonly title: string; readonly description: string }[] = [
    {
      title: 'Reply to Notice',
      description: 'Respond formally, dispute unsupported allegations, and reserve rights while supplying a concise factual record.',
    },
    {
      title: 'Negotiation',
      description: 'Seek reconciliation of the ledger, cure any verified shortfall, and record settlement terms in writing.',
    },
    {
      title: 'Filing / Complaint / Defense',
      description: 'Prepare for rent-control or civil proceedings if notice escalation continues without resolution.',
    },
    {
      title: 'Escalation Path',
      description: 'Escalate to specialist counsel if eviction threats intensify or if jurisdiction-specific interim relief may be needed.',
    },
  ];

  readonly consultationQuestions: readonly string[] = [
    'Does the governing forum require a reply within a fixed statutory timeline?',
    'Which payment entries still need documentary proof before counsel review?',
    'Would a settlement offer prejudice the client’s defensive position?',
    'Is interim protection available if possession is threatened before hearing?',
  ];
}
