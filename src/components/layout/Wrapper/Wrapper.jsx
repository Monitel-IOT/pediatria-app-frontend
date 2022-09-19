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
      <main className="grid grid-cols-[auto_1fr]">
        <aside
          className={classNames(
            'bg-white h-[calc(100vh-5rem)] sm:w-[310px] w-[100vw] shadow-lg transition-all fixed sm:sticky top-[5rem]',
            { 'ml-[-1000px]': toggleMainBar },
          )}
        >
          <MainBar />
        </aside>
        <section className={classNames('w-[100vw] sm:w-full bg-gray-100 mt-[5rem]')}>
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
