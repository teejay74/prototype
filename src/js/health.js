export default function getHealthPoints(hp) {
  if (hp.health > 50) return 'healthy';
  if (hp.health < 15) return 'critical';
  return 'wounded';
}
