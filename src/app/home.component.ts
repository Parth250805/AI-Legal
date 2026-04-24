import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="min-h-screen bg-[#25272d] px-3 py-3 sm:px-5 sm:py-4">
      <div class="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[680px] items-center justify-center">
        <section
          class="flex min-h-[720px] w-full max-w-[648px] flex-col overflow-hidden rounded-[24px] border border-[#d8cbbc] bg-[#f7f1e8] shadow-[0_14px_40px_rgba(10,8,5,0.3)]"
          aria-label="Lexis Archive chat screen"
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
            <section class="flex flex-1 flex-col px-4 pb-0 pt-3 sm:px-5 sm:pt-4">
              <figure class="overflow-hidden rounded-[4px] border border-[#eadfd2] bg-[#2c211b]">
                <img
                  src="/legal-library.jpg"
                  alt="Historic law library with bookshelves and chairs."
                  class="h-[114px] w-full object-cover object-center sm:h-[122px]"
                  style="object-position: center 69%;"
                />
              </figure>

              <div class="mt-9 rounded-[8px] border border-[#f1e9de] bg-[#fbf7f1] px-3 py-4 shadow-[0_12px_28px_rgba(83,57,42,0.04)] sm:px-4 sm:py-5">
                <div class="flex gap-3">
                  <div class="mt-0.5 h-9 w-px bg-[#74433a]"></div>
                  <div class="min-w-0 flex-1">
                    <label class="block">
                      <span class="text-[8px] font-semibold uppercase tracking-[0.26em] text-[#8b776c]">
                        Select Language
                      </span>

                      <div class="mt-3 grid grid-cols-2 gap-[7px]">
                        <button
                          type="button"
                          (click)="selectedLanguage.set('english')"
                          [class]="selectedLanguage() === 'english'
                            ? 'h-[32px] rounded-[2px] border border-[#6c352c] bg-[#6c352c] px-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#fbf5ee] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'
                            : 'h-[32px] rounded-[2px] border border-[#ece5dc] bg-[#ece8e1] px-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#85756b] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'"
                        >
                          English
                        </button>
                        <button
                          type="button"
                          (click)="selectedLanguage.set('hindi')"
                          [class]="selectedLanguage() === 'hindi'
                            ? 'h-[32px] rounded-[2px] border border-[#6c352c] bg-[#6c352c] px-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#fbf5ee] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'
                            : 'h-[32px] rounded-[2px] border border-[#ece5dc] bg-[#ece8e1] px-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#85756b] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30'"
                        >
                          Hindi
                        </button>
                      </div>
                    </label>

                    <label class="mt-5 block">
                      <span class="text-[8px] font-semibold uppercase tracking-[0.26em] text-[#8b776c]">
                        Location Context (Optional)
                      </span>
                      <span class="relative mt-2 block">
                        <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#b7aa9f]">
                          <svg viewBox="0 0 24 24" class="size-3 fill-current" aria-hidden="true">
                            <path
                              d="M12 2.75a6.25 6.25 0 0 0-6.25 6.25c0 4.57 5.17 10.62 5.39 10.88a1.14 1.14 0 0 0 1.72 0c.22-.26 5.39-6.31 5.39-10.88A6.25 6.25 0 0 0 12 2.75Zm0 8.5A2.25 2.25 0 1 1 12 6.75a2.25 2.25 0 0 1 0 4.5Z"
                            />
                          </svg>
                        </span>
                        <input
                          type="text"
                          placeholder="e.g. New Delhi, India"
                          class="h-[32px] w-full rounded-[2px] border border-[#efe8df] bg-[#efebe5] pl-8 pr-3 text-[10px] text-[#6b5b51] outline-none placeholder:text-[#b2a396] focus:border-[#d7c8bb]"
                        />
                      </span>
                    </label>

                    <label class="mt-5 flex items-start gap-2 text-[9px] leading-4 text-[#86766b]">
                      <input
                        type="checkbox"
                        class="mt-[2px] size-3 rounded-none border-[#ddd0c2] bg-[#faf6f0] text-[#6c352c] focus:ring-[#6c352c]"
                      />
                      <span>I understand the assistant may be incomplete and require review.</span>
                    </label>

                    <p class="mt-5 rounded-[2px] border border-[#f0e8de] bg-[#f1ece5] px-3 py-2 text-[8px] leading-[1.45] text-[#8d7f74]">
                      <span class="font-semibold text-[#614136]">Disclaimer:</span>
                      Output may be incomplete and should be reviewed before taking action.
                    </p>

                    <button
                      type="button"
                      class="mt-5 flex h-[30px] w-full items-center justify-center rounded-[2px] bg-[#6c352c] text-[9px] font-semibold uppercase tracking-[0.22em] text-[#fffaf5] shadow-[0_5px_12px_rgba(92,54,41,0.24)] transition hover:bg-[#623128] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3c31]/30"
                    >
                      Start Now
                    </button>
                  </div>
                </div>
              </div>
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
                    aria-current="page"
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
export class HomeComponent {
  readonly selectedLanguage = signal<'english' | 'hindi'>('english');
}
