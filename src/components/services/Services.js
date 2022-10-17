import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>App Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Other Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
            <li>
              <BiCheck size={50} className='service__list-icon'/>
              <p>ajbguodbo djbeoube jen ien oidhoidn kwnskn, jnskw ojsow bubsbvwis</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services