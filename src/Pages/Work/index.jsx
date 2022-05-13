import React, { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import DataContext from "../../config/dataContext";
import CustomFont from "../../components/CustomFont";
import Image from "../../components/Image";
import { normalizeQuery } from "../../config/normalize";
import './work.scss';

const Work = ({ works }) => {
  const { queryParams } = useParams();
  const data = useContext(DataContext);
  const history = useHistory();
  const [work, setWork] = useState({});
  const paramId = parseInt(queryParams.split("=")[0], 10);
  const paramTitle = queryParams.split("=")[1];

  useEffect(() => {
    if (data.isAllDataLoaded === true) {
      let temporaryWork = works.find(work => work.id === paramId)
      if (temporaryWork.id === paramId && normalizeQuery(temporaryWork.title) == normalizeQuery(paramTitle)) {
        setWork(temporaryWork);
      } else {
        history.push("/error404");
      }
    }
  }, [data.isAllDataLoaded]);

  return (
    <div className="wrapper__work">
      <div className="container__work">
        <CustomFont tag="h1" className="medium__font" content={work.title} />
        <CustomFont tag="p" className="small__font" content={work.year} />
        {data.isAllDataLoaded && work.tag &&        
          <CustomFont tag="p" className="small__font" content={data.tags.find(tag => tag.id === work.tag.id).name} />
        }
        <Image src={work.medias && work.medias[0].url} alt={`${data.artistName} - ${work.title} - ${work.year}`} />
      </div>
    </div>
  )
};

export default Work;