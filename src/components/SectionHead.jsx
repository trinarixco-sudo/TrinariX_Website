import Reveal from './Reveal';

export default function SectionHead({ index, kicker, title, dark = false }) {
  return (
    <Reveal className="section-head">
      <span className="section-index">{index}</span>
      <div>
        <p className={`kicker ${dark ? 'kicker-dark' : ''}`}>{kicker}</p>
        <h2 className={dark ? 'text-white' : ''}>{title}</h2>
      </div>
    </Reveal>
  );
}
