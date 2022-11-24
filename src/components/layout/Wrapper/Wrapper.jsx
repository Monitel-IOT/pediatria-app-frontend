import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Navbar from '../../UI/organisms/Navbar/Navbar';
import MainBar from '../../UI/organisms/MainBar/MainBar';

const Wrapper = ({ children }) => {
  const [toggleMainBar, setToggleMainBar] = useState(true);
  return (
    <div>
      <Navbar setToggleMainBar={setToggleMainBar} />
      <main className="grid grid-cols-[auto_1fr] pt-[5rem]">
        <aside
          className={classNames(
            'bg-white sm:w-[310px] w-[100vw] h-[calc(100vh-5rem)] shadow-lg transition-all fixed sm:sticky top-[5rem]',
            { 'ml-[-1000px]': toggleMainBar },
          )}
        >
          <MainBar />
        </aside>
        <section className={classNames('w-[100vw] sm:w-full bg-gray-100')}>
          {children}
        </section>
      </main>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Wrapper;
