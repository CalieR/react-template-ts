// update to add a 0 to single-digit days
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const monthAndDay = date.toLocaleDateString('en-GB', {
    month: 'short',
    day: 'numeric',
  });
  return monthAndDay.split(' ').reverse().join(' ');
};

// localise for different currencies.
// round to 2 d.p.
export const formatAmount = (price: number) => {
  return `£${price}`;
};

export const capitalise = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
