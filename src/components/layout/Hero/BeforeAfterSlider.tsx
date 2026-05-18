import Image from 'next/image';
import styles from './BeforeAfterSlider.module.scss';

export default function BeforeAfterSlider() {
  return (
    <div className={styles.comparison}>
      {/* Decorative bracket frame — defines container height via SVG aspect ratio */}
      <div className={styles.svgFrame} aria-hidden="true">
        {/* Landscape SVG — shown on tablet and above */}
        <svg
          className={styles.svgLandscape}
          viewBox="-11.5 -11.5 1012 414"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="auto"
        >
          <path
            id="bracketPath"
            d="M16.9998 0.498047C7.88706 0.498047 0.499756 7.88536 0.499756 16.9981V374.838C0.499756 383.951 7.88708 391.338 16.9998 391.338H328C337.113 391.338 344.5 383.951 344.5 374.838V274.859V268.474V226.359C344.5 217.799 351.44 210.859 360 210.859H629C637.56 210.859 644.5 217.799 644.5 226.359L644.5 268.474V374.838C644.5 383.951 651.887 391.338 661 391.338H972C981.113 391.338 988.5 383.951 988.5 374.838V16.9981C988.5 7.88536 981.113 0.498047 972 0.498047H661C651.887 0.498047 644.5 7.88535 644.5 16.998V60.1582H644.257V166.158C644.257 174.719 637.317 181.658 628.757 181.658H360C351.44 181.658 344.5 174.719 344.5 166.158V146.111V111.158V16.998C344.5 7.88535 337.113 0.498047 328 0.498047H16.9998Z"
            stroke="#D7E5EB"
            strokeWidth="2"
          />
          {/* Trail 1 — CW, starts at upper-left corner */}
          <rect width="5" height="5" rx="1" fill="#869AA1" x={-2.5} y={-2.5}>
            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin="0s" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
              <mpath href="#bracketPath" />
            </animateMotion>
          </rect>
          {Array.from({ length: 40 }, (_, i) => {
            const j = 40 - i;
            return (
              <rect key={`a${i}`} width="2" height="2" rx="1" fill="#869aa1" opacity={(i + 1) / 40} x={-1} y={-1}>
                <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin={`${j * 0.008}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                  <mpath href="#bracketPath" />
                </animateMotion>
              </rect>
            );
          })}

          {/* Trail 2 — CW, starts at bottom-right corner (½ cycle offset) */}
          <rect width="5" height="5" rx="1" fill="#869AA1" x={-2.5} y={-2.5}>
            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin="-6s" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
              <mpath href="#bracketPath" />
            </animateMotion>
          </rect>
          {Array.from({ length: 40 }, (_, i) => {
            const j = 40 - i;
            return (
              <rect key={`b${i}`} width="2" height="2" rx="1" fill="#869aa1" opacity={(i + 1) / 40} x={-1} y={-1}>
                <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin={`${-6 + j * 0.008}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                  <mpath href="#bracketPath" />
                </animateMotion>
              </rect>
            );
          })}
        </svg>

        {/* Portrait SVG — shown on mobile only (rotated via CSS); panels 434px, bridge 120px */}
        <svg
          className={styles.svgPortrait}
          viewBox="-11.5 -11.5 1012 414"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="auto"
        >
          <path
            id="bracketPathMobile"
            d="M16.9998 0.498047C7.88706 0.498047 0.499756 7.88536 0.499756 16.9981V374.838C0.499756 383.951 7.88708 391.338 16.9998 391.338H418C427.113 391.338 434.5 383.951 434.5 374.838V274.859V268.474V226.359C434.5 217.799 441.44 210.859 450 210.859H539C547.56 210.859 554.5 217.799 554.5 226.359L554.5 268.474V374.838C554.5 383.951 561.887 391.338 571 391.338H972C981.113 391.338 988.5 383.951 988.5 374.838V16.9981C988.5 7.88536 981.113 0.498047 972 0.498047H571C561.887 0.498047 554.5 7.88535 554.5 16.998V60.1582H554.257V166.158C554.257 174.719 547.317 181.658 538.757 181.658H450C441.44 181.658 434.5 174.719 434.5 166.158V146.111V111.158V16.998C434.5 7.88535 427.113 0.498047 418 0.498047H16.9998Z"
            stroke="#D7E5EB"
            strokeWidth="2"
          />
          {/* Trail 1 — CW, starts at upper-left corner */}
          <rect width="5" height="5" rx="1" fill="#869AA1" x={-2.5} y={-2.5}>
            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin="0s" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
              <mpath href="#bracketPathMobile" />
            </animateMotion>
          </rect>
          {Array.from({ length: 40 }, (_, i) => {
            const j = 40 - i;
            return (
              <rect key={`ma${i}`} width="2" height="2" rx="1" fill="#869aa1" opacity={(i + 1) / 40} x={-1} y={-1}>
                <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin={`${j * 0.008}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                  <mpath href="#bracketPathMobile" />
                </animateMotion>
              </rect>
            );
          })}

          {/* Trail 2 — CW, starts at bottom-right corner (½ cycle offset) */}
          <rect width="5" height="5" rx="1" fill="#869AA1" x={-2.5} y={-2.5}>
            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin="-6s" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
              <mpath href="#bracketPathMobile" />
            </animateMotion>
          </rect>
          {Array.from({ length: 40 }, (_, i) => {
            const j = 40 - i;
            return (
              <rect key={`mb${i}`} width="2" height="2" rx="1" fill="#869aa1" opacity={(i + 1) / 40} x={-1} y={-1}>
                <animateMotion dur="12s" repeatCount="indefinite" rotate="auto" begin={`${-6 + j * 0.008}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                  <mpath href="#bracketPathMobile" />
                </animateMotion>
              </rect>
            );
          })}
        </svg>
      </div>

      {/* Images overlaid on the SVG boxes */}
      <div className={styles.panels}>
        <div className={`${styles.panel} ${styles.panelBefore}`}>
          <span className={styles.badge}>Before</span>
          <Image
            src="/images/personalised-section-before-image.png"
            alt="Before facial analysis"
            fill
            sizes="(max-width: 425px) 100vw, (max-width: 768px) 50vw, 400px"
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.bridge} />

        <div className={`${styles.panel} ${styles.panelAfter}`}>
          <span className={styles.badge}>After</span>
          <Image
            src="/images/personalised-section-after-image.png"
            alt="After facial analysis"
            fill
            sizes="(max-width: 425px) 100vw, (max-width: 768px) 50vw, 400px"
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  );
}
