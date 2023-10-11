import './GoogleMap.css';

function GoogleMap() {
  return (
    <div className='google-map'>
    <iframe
      className='map-iframe'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875186.8305360343!2d37.84827575725204!3d37.81454761605225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1533137eb6f2a0df%3A0xba764218e4f47184!2zQWTEsXlhbWFu!5e0!3m2!1sen!2str!4v1696769416380!5m2!1sen!2str"
      width='100%'
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  );
}

export default GoogleMap;
