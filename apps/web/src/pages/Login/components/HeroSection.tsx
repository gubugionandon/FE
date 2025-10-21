export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row items-center gap-5">
        <span className="aspect -[37/32] h-[64px] w-[74px] bg-[rgba(255,191,0,0.10)]" />
        <span className="text-grey-600 text-[44px] font-extrabold">
          거부기린
        </span>
      </div>
      <p className="text-body-lg-medium text-grey-400">
        세상 모든 거북목들이 기린이 될 때까지
      </p>
    </div>
  );
}
