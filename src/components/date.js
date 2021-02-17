import { parseISO, format } from 'date-fns';

export default function Date({ dateString, blogList }) {
  const date = parseISO(dateString);

  if (blogList) {
    return (
      <>
        <time dateTime={dateString}>{format(date, 'LLLL do, yyyy')}</time>
      </>
    );
  }
  return (
    <>
      <time dateTime={dateString}>{format(date, 'LLLL do')}</time>
      <time dateTime={dateString}>
        {format(date, 'Do')} day of {format(date, 'yyyy')}
      </time>
    </>
  );
}
