import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Link from 'next/link';

function ButtonMenu() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button
      className="btn border font-weight-bold"
       onClick={handleClick} 
       variant="dark"
       data-toggle="tooltip"
      title="More">
        +
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Body>
            <div>
            <Link className="px-2 text-nowrap" href="/">Agregar a carrito
            </Link>
            </div>
            <div><Link className="px-2 text-nowrap" href="/">Enviar un mensaje
            </Link></div>
            <div><Link className="px-2 text-nowrap" href="/">Mas Detalles
            </Link></div>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default ButtonMenu;
/* 

                            
                            
                            <Dropdown.Menu>
                              <Dropdown.Item className="px-2 text-nowrap" href="#/action-1">
                                  Agregar a carrito
                              </Dropdown.Item>
                              <Dropdown.Item className="px-2 text-nowrap" href="#/action-2">
                              Enviar un mensaje
                              </Dropdown.Item>
                              <Dropdown.Item className="px-2 text-nowrap" href="#/action-3">
                              Mas Detalles
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown> */
                          