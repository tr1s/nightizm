import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  return (
    <>
      <time dateTime={dateString}>{format(date, 'LLLL do')}</time>
      <time dateTime={dateString}>
        {format(date, 'Do')} day of {format(date, 'yyyy')}
      </time>
    </>
  );
}
