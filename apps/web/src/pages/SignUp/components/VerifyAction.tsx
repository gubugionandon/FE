import { Button } from '@ui/Button/Button';
import TextField from '@ui/InputField/TextField';

export default function VerifyAction() {
  return (
    <div className="mt-20 flex w-[440px] flex-col gap-5">
      <TextField placeholder="boogirin@gmail.com" className="px-7" />
      <Button
        text="로그인"
        className="text-body-xl-medium h-[49px] w-[440px]"
      />
    </div>
  );
}
