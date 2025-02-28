import React from 'react';

export default function Peek() {
  return (
    <section className='xantares-peek'>
      <div className='section-header text-center mb-10'>
        <h1 className='fs-36'>
          {' '}
          DİKKAT <span className='text-header-purple'>XANTARES </span>PEEK{' '}
          <span className='text-header-purple'>ÇIKABİLİR</span>{' '}
          <i className='bi bi-exclamation-triangle'></i>
        </h1>
      </div>
      <div className='container text-center position-relative'>
        <img src='/xantares-peek.png' alt='XANTARES' className='xantares' />
        <img
          src='https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/330x192'
          alt='csgo-case'
          className='box'
        />
      </div>
    </section>
  );
}
