export default function Header({ text }) {
  return (
    <div className='section-header text-center'>
      <h1>
        {/* YENİ <span className='text-header-purple'>GELENLER</span> */}
        {text}
      </h1>
    </div>
  );
}
