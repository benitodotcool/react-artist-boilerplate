import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../config/dataContext';
import CustomFont from '../CustomFont';
import { normalizeQuery } from '../../config/normalize';
import './worksToDisplay.scss';

const WorksToDisplay = ({ works }) => {
  const data = useContext(DataContext);

  return (
    <div className="wrapper__works">
      <ul className="container__works">
        {works.map((work, i) =>
          <li
            key={i}
            className="work--item"
          >
            <Link to={`/work/${work.id}=${normalizeQuery(work.title)}`}>
              <CustomFont
                tag={'p'}
                className={'small__font'}
                content={work.year}
              />
              <CustomFont
                tag={'p'}
                className={'small__font'}
                content={work.tag?.id + '-' + data.tags.find((tag) => tag.id === work.tag?.id)?.name}
              />
              <CustomFont
                tag={'p'}
                className={'small__font'}
                content={work.title}
              />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default WorksToDisplay;