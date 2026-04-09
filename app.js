const ids = [
  'age',
  'weight',
  'height',
  'bodyFat',
  'leanPct',
  'bmi',
  'maintenance',
  'deficit',
  'surplus',
];

const fields = Object.fromEntries(ids.map((id) => [id, document.getElementById(id)]));

const get = (id) => {
  const value = Number.parseFloat(fields[id].value);
  return Number.isFinite(value) ? value : null;
};

const setIfEmpty = (id, value, decimals = 1) => {
  if (!Number.isFinite(value) || fields[id].value !== '') return false;
  fields[id].value = value.toFixed(decimals);
  return true;
};

function calculateMissing() {
  for (let i = 0; i < 4; i += 1) {
    const age = get('age');
    const weight = get('weight');
    const height = get('height');
    const bodyFat = get('bodyFat');
    const leanPct = get('leanPct');
    const bmi = get('bmi');
    const maintenance = get('maintenance');
    const deficit = get('deficit');
    const surplus = get('surplus');

    // Body fat and lean body mass percentage are complements.
    if (bodyFat !== null) setIfEmpty('leanPct', 100 - bodyFat, 1);
    if (leanPct !== null) setIfEmpty('bodyFat', 100 - leanPct, 1);

    // BMI from weight + height.
    if (weight !== null && height !== null) {
      const hM = height / 100;
      setIfEmpty('bmi', weight / (hM * hM), 2);
    }

    // Weight from BMI + height.
    if (bmi !== null && height !== null) {
      const hM = height / 100;
      setIfEmpty('weight', bmi * hM * hM, 1);
    }

    // Height from BMI + weight.
    if (bmi !== null && weight !== null) {
      const hM = Math.sqrt(weight / bmi);
      setIfEmpty('height', hM * 100, 1);
    }

    // Calories relationship.
    if (maintenance !== null) {
      setIfEmpty('deficit', maintenance - 500, 0);
      setIfEmpty('surplus', maintenance + 300, 0);
    }

    if (maintenance === null && deficit !== null) {
      setIfEmpty('maintenance', deficit + 500, 0);
    }

    if (maintenance === null && surplus !== null) {
      setIfEmpty('maintenance', surplus - 300, 0);
    }

    if (deficit === null && maintenance !== null) {
      setIfEmpty('deficit', maintenance - 500, 0);
    }

    if (surplus === null && maintenance !== null) {
      setIfEmpty('surplus', maintenance + 300, 0);
    }

    // Maintenance fallback estimate using weight and age if still unknown.
    const latestMaintenance = get('maintenance');
    const latestWeight = get('weight');
    if (latestMaintenance === null && latestWeight !== null) {
      const ageAdjustment = age === null ? 0 : Math.max(-120, Math.min(120, (30 - age) * 2));
      setIfEmpty('maintenance', latestWeight * 30 + ageAdjustment, 0);
    }
  }
}

document.getElementById('calculate').addEventListener('click', calculateMissing);

document.getElementById('clear').addEventListener('click', () => {
  ids.forEach((id) => {
    fields[id].value = '';
  });
});

ids.forEach((id) => {
  fields[id].addEventListener('change', calculateMissing);
});
