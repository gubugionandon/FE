import React, { useState } from 'react';
import { Button } from 'ui/Button';
import TextField from 'ui/TextField';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));

      // 입력 시 에러 메시지 초기화
      if (errors[field as keyof typeof errors]) {
        setErrors((prev) => ({
          ...prev,
          [field]: '',
        }));
      }

      // 이메일 변경 시 중복확인 상태 초기화
      if (field === 'email') {
        setIsEmailChecked(false);
      }
    };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\];':"\\|,.<>/?]).{8,16}$/;
    return passwordRegex.test(password);
  };

  const handleEmailDuplicateCheck = () => {
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: '이메일을 입력해주세요.' }));
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: '올바른 이메일 형식을 입력해주세요.',
      }));
      return;
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    };

    // 이메일 검증
    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    } else if (!isEmailChecked) {
      newErrors.email = '이메일 중복확인을 해주세요.';
    }

    // 비밀번호 검증
    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        '영문, 숫자, 특수문자를 조합하여 8-16글자로 입력해주세요.';
    }

    // 비밀번호 확인 검증
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호 확인을 입력해주세요.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }

    // 이름 검증
    if (!formData.name) {
      newErrors.name = '이름을 입력해주세요.';
    } else if (formData.name.length > 10) {
      newErrors.name = '이름은 최대 10글자 이내로 작성해주세요.';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  return (
    <main className="hbp:mt-[75px] mt-15 flex flex-col">
      <div className="hbp:mx-auto hbp:max-w-screen-lg hbp:px-10 relative w-full overflow-visible">
        {/* 페이지 제목 */}
        <section className="hbp:gap-[45px] flex w-full flex-col items-center justify-center gap-9 px-7">
          <p className="text-title-4xl-bold hbp:text-[40px] text-grey-900 text-center">
            회원가입
          </p>

          <div className="hbp:w-[550px] hbp:gap-[75px] flex w-110 flex-col gap-15">
            <div className="hbp:gap-[50px] flex w-full flex-col gap-10">
              <label
                htmlFor="email"
                className="text-body-lg-semibold hbp:text-headline-2xl-semibold text-grey-600"
              >
                이메일 <span className="text-red-500">*</span>
              </label>
              <div className="hbp:gap-[12.5px] flex w-full flex-row items-center justify-center gap-[10px]">
                <TextField
                  id="email"
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  className={`hbp:text-body-xl-regular aspect-[338/60] flex-1 outline-none focus:border-yellow-500 ${errors.email ? 'border-red-500' : ''}`}
                />
                <Button
                  size="sm"
                  onClick={handleEmailDuplicateCheck}
                  className={`hbp:w-[115px] hbp:h-[50px] hbp:text-body-xl-medium w-[92px] whitespace-nowrap ${isEmailChecked ? 'bg-green-400 hover:bg-green-500' : 'bg-yellow-400 hover:bg-yellow-500'} text-black`}
                >
                  {isEmailChecked ? '확인완료' : '중복확인'}
                </Button>
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* 비밀번호 섹션 */}
            <div className="hbp:gap-1.5 flex flex-col gap-1">
              <label className="text-body-lg-semibold hbp:text-headline-2xl-semibold text-grey-600">
                비밀번호 <span className="text-red-500">*</span>
              </label>
              <p className="hbp:mb-[7.5px] text-caption-sm-medium hbp:text-body-md-medium text-grey-300 mb-[6px]">
                영문, 숫자, 특수문자를 조합하여 8-16글자로 입력해주세요.
              </p>
              <TextField
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={formData.password}
                onChange={handleInputChange('password')}
                className={`hbp: hbp:text-body-xl-regular mb-[8px] mb-[9px] outline-none focus:border-yellow-500 ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && (
                <p className="mb-3 text-xs text-red-500">{errors.password}</p>
              )}
              <TextField
                type="password"
                placeholder="비밀번호를 재입력해주세요."
                value={formData.confirmPassword}
                onChange={handleInputChange('confirmPassword')}
                className={
                  errors.confirmPassword
                    ? 'border-red-500'
                    : 'hbp:text-body-xl-regular outline-none focus:border-yellow-500'
                }
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* 이름 섹션 */}
            <div className="hbp:gap-1.5 flex flex-col gap-1">
              <label className="text-body-lg-semibold hbp:text-headline-2xl-semibold text-grey-600">
                이름 <span className="text-red-500">*</span>
              </label>
              <p className="hbp:mb-[7.5px] text-caption-sm-medium hbp:text-body-md-medium text-grey-300 mb-[6px]">
                최대 10글자 이내로 작성해주세요.
              </p>
              <TextField
                type="text"
                placeholder="이름을 입력해주세요."
                value={formData.name}
                onChange={handleInputChange('name')}
                className={
                  errors.name
                    ? 'border-red-500'
                    : 'hbp:text-body-xl-regular outline-none focus:border-yellow-500'
                }
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* 완료 버튼 */}
            <Button size="xl" disabled={true}>
              완료
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUpPage;
