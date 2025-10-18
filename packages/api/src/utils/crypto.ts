import { HASH_ALGORITHMS } from '../constants';

// 해시 생성 유틸리티 함수
export async function generateHash(
  data: string,
  algorithm: string = HASH_ALGORITHMS.SHA256,
): Promise<string> {
  try {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest(algorithm, dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  } catch (error) {
    console.error('Hash generation failed:', error);
    throw new Error('Failed to generate hash');
  }
}

// 배치 해시 생성
export async function generateBatchHash(
  dataList: string[],
  algorithm: string = HASH_ALGORITHMS.SHA256,
): Promise<string[]> {
  const results = await Promise.all(
    dataList.map((data) => generateHash(data, algorithm)),
  );
  return results;
}

// 해시 검증
export async function verifyHash(
  data: string,
  expectedHash: string,
  algorithm: string = HASH_ALGORITHMS.SHA256,
): Promise<boolean> {
  const actualHash = await generateHash(data, algorithm);
  return actualHash === expectedHash;
}
