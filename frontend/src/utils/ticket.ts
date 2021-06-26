const COLORS = [
  'gray-100',
  'red-300',
  'yellow-300',
  'green-20',
  'blue-500',
  'purple-100',
  'pink-400',
];

export const getRandomBgColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

export const normalizeString = (string: string) => {
  return string
    .split(' ')
    .map((word, index) =>
      index > 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join('');
};

export const createStatus = (statusTitle: string) => {
  const newStatus = {
    type: normalizeString(statusTitle),
    title: statusTitle,
    color: getRandomBgColor(),
  };

  return newStatus;
};
