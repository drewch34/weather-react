// import Search from "./Search";
import "./Forecast.css";


export default function Forecast() {
  return (
    <div className="col future">
      <table className="table">
        <tbody>
          <tr>
            <th valign="middle" scope="row day-one" className="future-emoji">
              Fake weekly stuff ⛅️
            </th>
            <td id="day-plus-one">Sunday</td>
            <td>
              <p id="day-one-high" className="temp">
                22°C
              </p>
              <p id="day-one-low" className="temp">
                12°C
              </p>
            </td>
            <td>
              <p>↑</p>
              <p>↓</p>
            </td>
          </tr>
          <tr>
            <th scope="row day-two" className="future-emoji">
              🌤
            </th>
            <td id="day-plus-two">Monday</td>
            <td>
              <p id="day-two-high" className="temp">
                23°C
              </p>
              <p id="day-two-low" className="temp">
                18°C
              </p>
            </td>
            <td>
              <p>↑</p>
              <p>↓</p>
            </td>
          </tr>
          <tr>
            <th scope="row day-three" className="future-emoji">
              ⛅️
            </th>
            <td id="day-plus-three">Tuesday</td>
            <td>
              <p id="day-three-high" className="temp">
                21°C
              </p>
              <p id="day-three-low" className="temp">
                16°C
              </p>
            </td>
            <td>
              <p>↑</p>
              <p>↓</p>
            </td>
          </tr>
          <tr>
            <th scope="row day-four" className="future-emoji">
              🌦{" "}
            </th>
            <td id="day-plus-four">Wednesday</td>
            <td>
              <p id="day-four-high" className="temp">
                23°C
              </p>
              <p id="day-four-low" className="temp">
                14°C
              </p>
            </td>
            <td>
              <p>↑</p>
              <p>↓</p>
            </td>
          </tr>
          <tr>
            <th scope="row day-five" className="future-emoji">
              ⛅️{" "}
            </th>
            <td id="day-plus-five">Thursday</td>
            <td>
              <p id="day-five-high" className="temp">
                24°C
              </p>
              <p id="day-five-low" className="temp">
                19°C
              </p>
            </td>
            <td>
              <p>↑</p>
              <p>↓</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
