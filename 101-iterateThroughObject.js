export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const item of reportWithIterator) {
    employees += `${item} | `;
  }
  return employees.slice(0, employees.length-3);
}
