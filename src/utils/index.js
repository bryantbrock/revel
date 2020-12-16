export const toHuman = str =>
  str.split(' ')
    .map(str => str[0].toUpperCase() + str.slice(1))
    .join(' ')

export const toLowerCase = str =>
  str.split(' ')
    .map(str => str[0].toLowerCase() + str.slice(1))
    .join(' ')

export const humanToSlug = str =>
  str.split(' ')
    .map(str => str[0].toLowerCase() + str.slice(1))
    .join('-')


// Date Time
export const toHumanDate = dateString =>
  new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })