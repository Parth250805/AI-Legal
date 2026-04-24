import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type UrgencyLevel = 'standard' | 'urgent' | 'critical';

type TimelineEvent = {
  readonly date: string;
  readonly summary: string;
};

type DocumentItem = {
  readonly label: string;
  readonly checked: boolean;
};

@Component({
  selector: 'app-case-details',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="min-h-screen bg-[#25272d] px-3 py-3 sm:px-5 sm:py-4">
      <div class="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[680px] items-center justify-center">
        <section
          class="flex min-h-[860px] w-full max-w-[648px] flex-col overflow-hidden rounded-[24px] border border-[#d8cbbc] bg-[#f7f1e8] shadow-[0_14px_40px_rgba(10,8,5,0.3)]"
          aria-label="Lexis Archive case details screen"
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
                <p class="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Case Intake</p>
                <h1
                  class="mt-2 text-[38px] leading-[0.96] text-[#4a2b22]"
                  style="font-family: 'Cormorant Garamond', serif; font-weight: 600;"
                >
                  Case Details
                </h1>
                <p class="mt-2 max-w-[460px] text-[12px] leading-5 text-[#8a7a70]">
                  Provide the facts, parties, and legal context for a more accurate response.
                </p>
              </div>

              <section class="mt-5 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Matter Overview</p>
                <div class="mt-4 grid gap-4 sm:grid-cols-2">
                  <label class="block">
                    <span class="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#8b776c]">Case Title</span>
                    <input type="text" value="Sharma v. Horizon Residency" class="mt-2 h-9 w-full rounded-[4px] border border-[#e7ded4] bg-[#f5f2ec] px-3 text-[11px] text-[#4a2b22] outline-none focus:border-[#d7c8bb]" />
                  </label>
                  <label class="block">
                    <span class="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#8b776c]">Matter Type</span>
                    <input type="text" value="Tenancy Dispute" class="mt-2 h-9 w-full rounded-[4px] border border-[#e7ded4] bg-[#f5f2ec] px-3 text-[11px] text-[#4a2b22] outline-none focus:border-[#d7c8bb]" />
                  </label>
                  <label class="block">
                    <span class="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#8b776c]">Jurisdiction</span>
                    <input type="text" value="New Delhi" class="mt-2 h-9 w-full rounded-[4px] border border-[#e7ded4] bg-[#f5f2ec] px-3 text-[11px] text-[#4a2b22] outline-none focus:border-[#d7c8bb]" />
                  </label>
                  <label class="block">
                    <span class="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#8b776c]">Court / Authority</span>
                    <input type="text" value="District Rent Controller" class="mt-2 h-9 w-full rounded-[4px] border border-[#e7ded4] bg-[#f5f2ec] px-3 text-[11px] text-[#4a2b22] outline-none focus:border-[#d7c8bb]" />
                  </label>
                </div>

                <div class="mt-4">
                  <p class="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#8b776c]">Urgency</p>
                  <div class="mt-2 grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      (click)="urgency.set('standard')"
                      [class]="urgency() === 'standard'
                        ? 'h-9 rounded-[4px] border border-[#6c352c] bg-[#6c352c] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#fdf8f2]'
                        : 'h-9 rounded-[4px] border border-[#e5ddd5] bg-[#f1ece6] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8a7a70]'"
                    >
                      Standard
                    </button>
                    <button
                      type="button"
                      (click)="urgency.set('urgent')"
                      [class]="urgency() === 'urgent'
                        ? 'h-9 rounded-[4px] border border-[#6c352c] bg-[#6c352c] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#fdf8f2]'
                        : 'h-9 rounded-[4px] border border-[#e5ddd5] bg-[#f1ece6] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8a7a70]'"
                    >
                      Urgent
                    </button>
                    <button
                      type="button"
                      (click)="urgency.set('critical')"
                      [class]="urgency() === 'critical'
                        ? 'h-9 rounded-[4px] border border-[#6c352c] bg-[#6c352c] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#fdf8f2]'
                        : 'h-9 rounded-[4px] border border-[#e5ddd5] bg-[#f1ece6] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8a7a70]'"
                    >
                      Critical
                    </button>
                  </div>
                </div>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Parties Involved</p>
                <div class="mt-4 grid gap-4">
                  <label class="block">
                    <span class="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#8b776c]">Client / Your Side</span>
                    <input type="text" value="Amit Sharma, tenant" class="mt-2 h-9 w-full rounded-[4px] border border-[#e7ded4] bg-[#f5f2ec] px-3 text-[11px] text-[#4a2b22] outline-none focus:border-[#d7c8bb]" />
                  </label>
                  <label class="block">
                    <span class="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#8b776c]">Opposing Party</span>
                    <input type="text" value="Horizon Residency LLP" class="mt-2 h-9 w-full rounded-[4px] border border-[#e7ded4] bg-[#f5f2ec] px-3 text-[11px] text-[#4a2b22] outline-none focus:border-[#d7c8bb]" />
                  </label>
                  <label class="block">
                    <span class="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#8b776c]">Relationship Between Parties</span>
                    <input type="text" value="Residential landlord and tenant" class="mt-2 h-9 w-full rounded-[4px] border border-[#e7ded4] bg-[#f5f2ec] px-3 text-[11px] text-[#4a2b22] outline-none focus:border-[#d7c8bb]" />
                  </label>
                </div>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Factual Summary</p>
                <label class="mt-4 block">
                  <span class="sr-only">Core case narrative</span>
                  <textarea class="min-h-[116px] w-full rounded-[4px] border border-[#e7ded4] bg-[#f5f2ec] px-3 py-3 text-[11px] leading-5 text-[#4a2b22] outline-none focus:border-[#d7c8bb]">The landlord issued a notice alleging unpaid maintenance and seeking eviction despite partial payments already acknowledged over email. The client disputes the claimed arrears and wants to preserve possession while responding formally.</textarea>
                </label>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <div class="flex items-center justify-between gap-3">
                  <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Key Timeline</p>
                  <button type="button" class="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#6c352c]">+ Add Event</button>
                </div>

                <div class="mt-4 space-y-3">
                  @for (event of timelineEvents; track event.date + event.summary) {
                    <div class="grid grid-cols-[96px_1fr] gap-3 rounded-[6px] border border-[#ebe2d9] bg-[#f5f2ec] px-3 py-3">
                      <div class="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6c352c]">{{ event.date }}</div>
                      <div class="text-[11px] leading-5 text-[#6f5e54]">{{ event.summary }}</div>
                    </div>
                  }
                </div>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Document Status</p>
                <div class="mt-4 grid gap-3 sm:grid-cols-2">
                  @for (document of documentItems; track document.label) {
                    <label class="flex items-center gap-2 rounded-[4px] border border-[#ebe2d9] bg-[#f5f2ec] px-3 py-2.5 text-[10px] text-[#6f5e54]">
                      <input
                        type="checkbox"
                        [checked]="document.checked"
                        class="size-3 rounded-none border-[#d9cbbf] bg-[#faf6f0] text-[#6c352c] focus:ring-[#6c352c]"
                      />
                      <span>{{ document.label }}</span>
                    </label>
                  }
                </div>
              </section>

              <section class="mt-4 rounded-[10px] border border-[#e8dfd7] bg-[#faf6f0] p-4">
                <p class="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8b776c]">Legal Objective</p>
                <label class="mt-4 block">
                  <span class="sr-only">Desired outcome</span>
                  <textarea class="min-h-[92px] w-full rounded-[4px] border border-[#e7ded4] bg-[#f5f2ec] px-3 py-3 text-[11px] leading-5 text-[#4a2b22] outline-none focus:border-[#d7c8bb]">Seek a defensible reply to the notice, reconcile the payment position, and avoid immediate dispossession while preparing for proceedings if necessary.</textarea>
                </label>
              </section>

              <button
                type="button"
                class="mt-5 flex h-11 w-full items-center justify-center rounded-[4px] bg-[#6c352c] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#fffaf5] shadow-[0_6px_14px_rgba(92,54,41,0.24)] transition hover:bg-[#623128] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30"
              >
                Generate Case Analysis
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
                    aria-current="page"
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
export class CaseDetailsComponent {
  readonly urgency = signal<UrgencyLevel>('standard');

  readonly timelineEvents: readonly TimelineEvent[] = [
    {
      date: '12 Jan 2026',
      summary: 'Lease renewal signed for an additional eleven-month term with revised maintenance clause.',
    },
    {
      date: '03 Mar 2026',
      summary: 'Landlord issued a payment default email alleging delayed maintenance reimbursement.',
    },
    {
      date: '17 Apr 2026',
      summary: 'Formal legal notice served seeking payment and possible eviction proceedings.',
    },
  ];

  readonly documentItems: readonly DocumentItem[] = [
    { label: 'Rent agreement / contract', checked: true },
    { label: 'Legal notice', checked: true },
    { label: 'Payment records', checked: true },
    { label: 'Prior communication', checked: true },
    { label: 'Court filings', checked: false },
  ];
}
