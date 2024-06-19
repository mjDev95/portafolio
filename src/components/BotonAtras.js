import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

function BotonAtras() {
  let navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <button className="btn-back" onClick={handleBack} style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 1000 }}>
      <ArrowLeft />
    </button>
  );
}

export default BotonAtras;
