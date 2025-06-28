// src/lib/api.ts
export const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3002';

async function fetchDocs(path: string) {
  const res = await fetch(`${PAYLOAD_URL}${path}`, {
    // disable Next.js automatic caching
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  const { docs } = await res.json();
  return docs;
}

export function getExperience() {
  return fetchDocs('/api/experience');
}

export function getProjects() {
  return fetchDocs('/api/projects');
}

export function getCertificates() {
  return fetchDocs('/api/certificates');
}

export function getTechStack() {
  return fetchDocs('/api/tech-stack');
}

export function getEducation() {
  return fetchDocs('/api/education');
}