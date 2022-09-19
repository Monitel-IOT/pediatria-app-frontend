/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';

const Pager = ({ size, ...props }) => {
  const page = props.index + 1;

  const previousPage = () => {
    if (page > 1) props.onChange(page - 1);
  };

  const nextPage = () => {
    if (page < props.maxPages) props.onChange(page + 1);
  };

  const renderPagesIcons = () => {
    if (props.maxPages > 5) {
      return (
        <>
          {page > 2 && <Button className="hidden sm:block" outline onClick={() => props.onChange(1)}>1</Button>}
          {page > 3 && <p className="hidden sm:block sm:font-bold">...</p>}
          {page > props.maxPages - 1 && (
            <Button className="hidden sm:block" outline onClick={() => props.onChange(page - 3)}>{page - 3}</Button>
          )}
          {page > props.maxPages - 2 && (
            <Button className="hidden sm:block" outline onClick={() => props.onChange(page - 2)}>{page - 2}</Button>
          )}
          {page > 1 && (
            <Button className="hidden sm:block" outline onClick={() => props.onChange(page - 1)}>{page - 1}</Button>
          )}
          <Button primary className="active">{page}</Button>
          {page < props.maxPages - 1 && (
            <Button outline className="hidden sm:block" onClick={() => props.onChange(page + 1)}>{page + 1}</Button>
          )}
          {page < 3 && (
            <Button outline className="hidden sm:block" onClick={() => props.onChange(page + 2)}>{page + 2}</Button>
          )}
          {page < 2 && (
            <Button outline className="hidden sm:block" onClick={() => props.onChange(page + 3)}>{page + 3}</Button>
          )}
          {page < props.maxPages - 2 && <p className="hidden sm:block sm:font-bold">...</p>}
          {page < props.maxPages && (
            <Button outline className="hidden sm:block" onClick={() => props.onChange(props.maxPages)}>
              {props.maxPages}
            </Button>
          )}
        </>
      );
    }
    const items = [];
    for (let i = 0; i < props.maxPages; i += 1) {
      items.push(
        <Button
          outline={!(i === props.index)}
          key={i}
          onClick={() => props.onChange(i + 1)}
          className={i === props.index ? 'active' : 'hidden sm:block'}
          primary={i === props.index}
        >
          {i + 1}
        </Button>,
      );
    }
    return items;
  };

  return (
    <div className="flex gap-2">
      <Button
        primary={!(page === 1)}
        size={size}
        onClick={previousPage}
        disabled={page === 1}
      >
        Atras
      </Button>
      {renderPagesIcons()}
      <Button
        primary={!(page === props.maxPages)}
        size={size}
        onClick={nextPage}
        disabled={page === props.maxPages}
      >
        Siguiente
      </Button>
    </div>
  );
};

Pager.propTypes = {
  size: PropTypes.string,
  index: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  compressed: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Pager;
