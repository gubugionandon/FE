# 🚨 Vercel 즉시 수정 방법

현재 Vercel에서 여전히 "Root Directory 'apps/web' does not exist" 오류가 발생하고 있습니다.

## 🔧 즉시 해결 방법

### 1. Vercel 대시보드 접속
1. [Vercel Dashboard](https://vercel.com/dashboard) 접속
2. `gubugionandon-FE` 프로젝트 클릭

### 2. 프로젝트 설정 변경
1. **Settings** 탭 클릭
2. **General** 섹션으로 스크롤
3. **Root Directory** 필드를 찾아서:
   - 현재 값: `apps/web`
   - **완전히 삭제**하거나 **`.`** (점 하나)로 변경
4. **Save** 버튼 클릭

### 3. Build & Output Settings 확인
같은 페이지에서:
- **Build Command**: 비워두기 또는 `npm run build` 삭제
- **Output Directory**: 비워두기 또는 `dist` 삭제  
- **Install Command**: 비워두기 또는 `npm ci` 삭제
- **Framework Preset**: `Other` 또는 `None`으로 설정

### 4. 새로운 배포 트리거
설정 저장 후:
1. **Deployments** 탭으로 이동
2. **Redeploy** 버튼 클릭 (최신 커밋으로)

## 📋 올바른 설정값

```
Root Directory: (비워둠 또는 .)
Build Command: (비워둠)
Output Directory: (비워둠)
Install Command: (비워둠)
Framework Preset: Other
```

## 🔍 확인 방법

설정이 올바르게 적용되었는지 확인:
1. 새로운 배포가 시작되면
2. Build Logs에서 "Root Directory" 오류가 사라져야 함
3. 대신 정적 파일들이 정상적으로 서빙되어야 함

## ⚠️ 주의사항

- Root Directory를 완전히 비워두는 것이 중요합니다
- GitHub Actions에서 이미 빌드된 파일들을 배포하므로 Vercel에서 추가 빌드가 필요하지 않습니다
- vercel.json 파일이 자동으로 생성되어 올바른 설정을 제공합니다

## 🆘 여전히 문제가 있다면

1. Vercel 프로젝트를 삭제하고 새로 생성
2. GitHub 저장소를 다시 연결
3. 이번에는 Root Directory 설정을 하지 않음
