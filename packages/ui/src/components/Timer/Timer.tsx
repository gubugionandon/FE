type CountdownValue = 0 | 1 | 2 | 3 | 4 | 5;

type Props = {
  value: CountdownValue; // 5 -> 4 -> 3 -> 2 -> 1 -> 0
  size?: number; // 기본 100
  on?: string; // 하이라이트 색 (기본 #FFBF00)
  off?: string; // 비활성 색 (기본 white)
};

const SEG_KEYS = ['LT', 'TOP', 'LB', 'RT', 'RB'] as const;
type SegmentKey = (typeof SEG_KEYS)[number];

/**
 * 각 숫자에서 노란색으로 켜질 세그먼트 매핑
 *  - LT: 좌상(왼쪽 위 곡선)
 *  - TOP: 상단 곡선
 *  - LB: 좌하(왼쪽 아래 곡선)
 *  - RT: 우상(오른쪽 위 곡선)
 *  - RB: 우하(오른쪽 아래 곡선)
 *
 * 원본 SVG들을 기준으로 매핑함:
 * 5: 모두 흰색
 * 4: LB만 노랑
 * 3: LT, TOP, LB 노랑
 * 2: LT, LB 노랑
 * 1: LT, TOP, LB, RT 노랑 (RB만 흰색)
 * 0: 전부 노랑
 */
const activeMap: Record<CountdownValue, SegmentKey[]> = {
  5: [],
  4: ['LB'],
  3: ['LT', 'LB'],
  2: ['LT', 'TOP', 'LB'],
  1: ['LT', 'TOP', 'LB', 'RT'],
  0: ['LT', 'TOP', 'LB', 'RT', 'RB'],
};

// 각 숫자 중앙 글리프(path) — 원본 그대로 (축약/가공 없음)
const centerPathMap: Record<CountdownValue, { d: string; fill?: string }> = {
  5: {
    d: 'M50.0215 62.2148C48.9974 62.2148 48.0736 62.0251 47.25 61.6455C46.4264 61.266 45.7747 60.7432 45.2949 60.0771C44.8223 59.404 44.5716 58.6413 44.543 57.7891H47.2715C47.3001 58.2044 47.4362 58.5768 47.6797 58.9062C47.9303 59.2357 48.2598 59.4935 48.668 59.6797C49.0833 59.8659 49.5345 59.959 50.0215 59.959C50.5944 59.959 51.1064 59.8301 51.5576 59.5723C52.016 59.3145 52.3704 58.96 52.6211 58.5088C52.8789 58.0505 53.0078 57.5384 53.0078 56.9727C53.0078 56.3854 52.8753 55.8626 52.6104 55.4043C52.3454 54.9388 51.9801 54.5771 51.5146 54.3193C51.0492 54.0544 50.5228 53.9219 49.9355 53.9219C48.7038 53.9004 47.8444 54.3444 47.3574 55.2539H44.7578L45.7031 46.4453H54.8984V48.7871H48.002L47.5293 52.9121H47.6797C47.9876 52.5612 48.4102 52.2783 48.9473 52.0635C49.4844 51.8415 50.0645 51.7305 50.6875 51.7305C51.64 51.7305 52.4993 51.9525 53.2656 52.3965C54.0319 52.8405 54.6299 53.4564 55.0596 54.2441C55.4964 55.0247 55.7148 55.9056 55.7148 56.8867C55.7148 57.9108 55.4714 58.8275 54.9844 59.6367C54.5046 60.446 53.8314 61.0798 52.9648 61.5381C52.1055 61.9893 51.1243 62.2148 50.0215 62.2148Z',
  },
  4: {
    d: 'M43.3555 59.8359V57.3984L50.6914 46.0312H54.4883V57.3281H56.7148V59.8359H54.4883V63H51.582V59.8359H43.3555ZM46.4727 57.3281H51.6289V49.5H51.4414L46.4727 57.2109V57.3281Z',
  },
  3: {
    d: 'M49.9219 63.2214C46.2891 63.2214 43.7109 61.2527 43.6406 58.3933H46.7109C46.8047 59.7527 48.1641 60.6433 49.9219 60.6433C51.7969 60.6433 53.1328 59.6121 53.1328 58.1121C53.1328 56.5886 51.8203 55.4871 49.6172 55.4871H48.0938V53.1433H49.6172C51.4219 53.1433 52.6875 52.1355 52.6641 50.6589C52.6875 49.2292 51.6094 48.2683 49.9453 48.2683C48.3516 48.2683 46.9688 49.1589 46.9219 50.5886H43.9922C44.0625 47.7292 46.6406 45.7839 49.9688 45.7839C53.4141 45.7839 55.6406 47.8933 55.6172 50.4949C55.6406 52.3933 54.375 53.7761 52.5234 54.1511V54.2917C54.9141 54.6199 56.2734 56.1433 56.25 58.2761C56.2734 61.1355 53.6016 63.2214 49.9219 63.2214Z',
  },
  2: {
    d: 'M44.6758 63V60.7969L50.6758 55.0078C52.3867 53.2969 53.2773 52.2891 53.2773 50.8594C53.2773 49.2891 52.0352 48.2812 50.3711 48.2812C48.6133 48.2812 47.4883 49.3828 47.5117 51.0938H44.6055C44.582 47.8828 46.9961 45.7969 50.3945 45.7969C53.8633 45.7969 56.207 47.8594 56.207 50.7188C56.207 52.6406 55.2695 54.1875 51.9414 57.3281L48.918 60.3281V60.4453H56.4648V63H44.6758Z',
  },
  1: {
    d: 'M52.7227 46.0184V62.9872H49.6523V48.995H49.5586L45.5977 51.5262V48.7372L49.793 46.0184H52.7227Z',
  },
  0: {
    d: 'M50 62.2344C48.6406 62.2344 47.4727 61.8945 46.4961 61.2148C45.5273 60.5273 44.7812 59.5312 44.2578 58.2266C43.7422 56.9219 43.4844 55.3516 43.4844 53.5156C43.4844 51.6875 43.7422 50.1211 44.2578 48.8164C44.7812 47.5039 45.5312 46.5078 46.5078 45.8281C47.4844 45.1406 48.6484 44.7969 50 44.7969C51.3438 44.7969 52.5039 45.1406 53.4805 45.8281C54.4648 46.5078 55.2148 47.5039 55.7305 48.8164C56.2539 50.1211 56.5156 51.6875 56.5156 53.5156C56.5156 55.3516 56.2539 56.9219 55.7305 58.2266C55.2148 59.5312 54.4688 60.5273 53.4922 61.2148C52.5234 61.8945 51.3594 62.2344 50 62.2344ZM50 59.6797C50.7188 59.6797 51.332 59.4492 51.8398 58.9883C52.3555 58.5195 52.75 57.8281 53.0234 56.9141C53.3047 55.9922 53.4453 54.8594 53.4453 53.5156C53.4453 52.1875 53.3047 51.0625 53.0234 50.1406C52.75 49.2109 52.3555 48.5117 51.8398 48.043C51.3242 47.5664 50.7109 47.3281 50 47.3281C49.2891 47.3281 48.6758 47.5664 48.1602 48.043C47.6445 48.5117 47.2461 49.2109 46.9648 50.1406C46.6914 51.0625 46.5547 52.1875 46.5547 53.5156C46.5547 54.8594 46.6914 55.9922 46.9648 56.9141C47.2461 57.8281 47.6406 58.5195 48.1484 58.9883C48.6641 59.4492 49.2812 59.6797 50 59.6797Z',
    fill: '#FFBF00',
  },
};

const Timer = function Timer({
  value,
  size = 100,
  on = '#FFBF00',
  off = 'white',
}: Props) {
  const active = new Set(activeMap[value]);
  const stroke = (seg: SegmentKey) => (active.has(seg) ? on : off);
  const center = centerPathMap[value];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`countdown-${value}`}
    >
      {/* 공통 5개 곡선 세그먼트 */}
      <g filter="url(#f0)">
        <path
          d="M36.2946 39.9658C33.877 42.2527 30.5117 46.9899 30.5117 53.1973"
          stroke={stroke('LT')}
          strokeWidth="5.22727"
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#f1)">
        <path
          d="M57.1548 35.849C54.0862 34.5611 48.3933 33.396 42.7148 35.9032"
          stroke={stroke('TOP')}
          strokeWidth="5.22727"
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#f2)">
        <path
          d="M31.3624 60.1301C32.3804 63.2985 35.1987 68.3802 40.7969 71.062"
          stroke={stroke('LB')}
          strokeWidth="5.22727"
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#f3)">
        <path
          d="M63.5999 39.9658C66.0175 42.2527 69.3828 46.9899 69.3828 53.1973"
          stroke={stroke('RT')}
          strokeWidth="5.22727"
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#f4)">
        <path
          d="M68.5243 60.1301C67.5064 63.2985 64.688 68.3802 59.0898 71.062"
          stroke={stroke('RB')}
          strokeWidth="5.22727"
          strokeLinecap="round"
        />
      </g>

      {/* 중앙 숫자/원 */}
      <g filter="url(#fc)">
        <path d={center.d} fill={center.fill ?? off} />
      </g>

      {/* 공통 필터들(원본에서 이름만 단순화) */}
      <defs>
        <filter
          id="f0"
          x="7.89844"
          y="17.3522"
          width="51.0117"
          height="58.4588"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend in="SourceGraphic" result="shape" />
        </filter>
        <filter
          id="f1"
          x="20.1016"
          y="11.8096"
          width="59.668"
          height="46.7079"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend in="SourceGraphic" result="shape" />
        </filter>
        <filter
          id="f2"
          x="8.74609"
          y="37.5158"
          width="54.6641"
          height="56.1605"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend in="SourceGraphic" result="shape" />
        </filter>
        <filter
          id="f3"
          x="40.9844"
          y="17.3522"
          width="51.0117"
          height="58.4588"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend in="SourceGraphic" result="shape" />
        </filter>
        <filter
          id="f4"
          x="36.4766"
          y="37.5158"
          width="54.6641"
          height="56.1605"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend in="SourceGraphic" result="shape" />
        </filter>
        <filter
          id="fc"
          x="33"
          y="36"
          width="34"
          height="37"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend in="SourceGraphic" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export { Timer };
export default Timer;
