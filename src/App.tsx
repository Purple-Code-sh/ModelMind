import HeaderBar from "./components/Header/HeaderBar";
import "./App.css";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <HeaderBar />

      <main>
        <article>
          <h2>Artículo Principal</h2>
          <p>
            Este es el contenido principal de la página. Aquí puedes ver cómo se
            aplica la fuente Arial para el texto del cuerpo. Es fácil de leer en
            diferentes tamaños de pantalla.
          </p>
          <p>
            El diseño se ajustará automáticamente a diferentes tamaños de
            pantalla gracias al CSS responsivo. Observa cómo cambian los tamaños
            y disposiciones al redimensionar la ventana.
          </p>
        </article>

        <article>
          <h2>Segundo Artículo</h2>
          <p>
            Este es otro artículo en la página principal. Puedes notar que los
            encabezados H2 utilizan la fuente Verdana, que contrasta bien con el
            texto del cuerpo.
          </p>
          <p>
            Los artículos se reorganizarán en pantallas más pequeñas para una
            mejor legibilidad. Intenta reducir el tamaño de la ventana para ver
            cómo se adapta el diseño.
          </p>
        </article>

        <aside>
          <h3>Barra Lateral</h3>
          <p>
            Aquí puedes ver cómo se aplica la fuente Cambria a la barra lateral.
            Este texto tiene un aspecto ligeramente diferente al del cuerpo
            principal, creando una distinción visual.
          </p>
          <p>
            En dispositivos móviles, esta barra lateral se moverá arriba de los
            artículos principales para una mejor experiencia de usuario en
            pantallas pequeñas.
          </p>
          <h4>Ache 4</h4>
          <p>
            Aquí puedes ver cómo se aplica la fuente Cambria a la barra lateral.
            Este texto tiene un aspecto ligeramente diferente al del cuerpo
            principal, creando una distinción visual.
          </p>
          <h5>Ache 5</h5>
          <p>
            Aquí puedes ver cómo se aplica la fuente Cambria a la barra lateral.
            Este texto tiene un aspecto ligeramente diferente al del cuerpo
            principal, creando una distinción visual.
          </p>
        </aside>
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Mi Sitio Web Responsivo. Todos los
          derechos reservados. Nota cómo el pie de página utiliza la fuente
          Courier New para un aspecto distintivo.
        </p>
      </footer>
    </div>
  );
};

export default App;
