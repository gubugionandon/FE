# Vercel 배포 설정 가이드

GitHub Actions에서 자동으로 배포된 web 앱을 Vercel에서 정상적으로 배포하기 위한 설정 가이드입니다.

## 🚨 현재 문제

Vercel에서 "Root Directory 'apps/web' does not exist" 오류가 발생하고 있습니다.

## 🔧 해결 방법

### 1. Vercel 프로젝트 설정 수정

Vercel 대시보드에서 다음 설정을 변경해야 합니다:

1. **프로젝트 설정** → **General** 탭으로 이동
2. **Root Directory** 설정을 **제거**하거나 **`.`** (루트)로 변경
3. **Build Command**를 `npm run build` 또는 비워두기
4. **Output Directory**를 `dist` 또는 비워두기
5. **Install Command**를 `npm ci` 또는 비워두기

### 2. 또는 vercel.json 파일 추가

`gubugionandon-FE` 저장소의 루트에 다음 `vercel.json` 파일을 추가:

```json
{
  "buildCommand": "",
  "outputDirectory": ".",
  "devCommand": "",
  "installCommand": "",
  "framework": null,
  "regions": ["icn1"],
  "functions": {
    "**/*.js": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/",
      "destination": "/index.html"
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 📋 배포 구조 설명

### 현재 배포 구조:
```
gubugionandon-FE/ (GitHub Actions로 배포된 저장소)
├── index.html          # 메인 HTML 파일
├── assets/             # 빌드된 CSS, JS 파일들
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── build-info.json     # 빌드 정보
```

### Vercel이 기대하는 구조:
- **루트 디렉토리**: `.` (현재 디렉토리)
- **빌드 명령어**: 없음 (이미 빌드된 정적 파일들이므로)
- **출력 디렉토리**: `.` (현재 디렉토리)

## 🚀 설정 완료 후

1. Vercel 설정을 변경한 후
2. 새로운 배포를 트리거하거나
3. 기존 배포를 다시 실행하면 정상적으로 배포됩니다

## 🔍 문제 해결

### 만약 여전히 문제가 있다면:

1. **Vercel 대시보드**에서 **Functions** 탭 확인
2. **Build Logs** 확인하여 정확한 오류 메시지 파악
3. **환경 변수** 설정 확인
4. **도메인 설정** 확인

## 📝 참고사항

- GitHub Actions에서 이미 빌드된 정적 파일들을 배포하므로 Vercel에서는 별도 빌드가 필요하지 않습니다
- `build-info.json` 파일에는 빌드 시간, 커밋 해시, 버전 등의 정보가 포함되어 있습니다
