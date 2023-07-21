import React from "react";
import "../AdminPage.css";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <div>
        <h2 className="heading">Filters</h2>
        <div className="filter"></div>
        <div>
          <h4 className="sub-head">Sort By Price</h4>
          <div className="filter sorting">
            <select name="">
              <option value="">Relevence</option>
              <option value="">Low to High</option>
              <option value="">High to Low</option>
            </select>
          </div>
        </div>

        <div>
          <h4 className="sub-head">By Category</h4>
          <div className="filter filter-category">
            <div>
              <input type="checkbox" />
              <label>Sofas</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Beds</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Kitchen&Dining</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Living</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Sofas</label>
            </div>
          </div>
        </div>
        <div>
          <h4 className="sub-head">By Rating</h4>
          <div className="filter filter-category">
            <div>
              <input type="checkbox" value={"1"} />
              <label>
                <span>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</span>
              </label>
            </div>
            <div>
              <input type="checkbox" value={"2"} />
              <label>
                <span>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</span>
              </label>
            </div>
            <div>
              <input type="checkbox" value={"3"} />
              <label>
                <span>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</span>
              </label>
            </div>
            <div>
              <input type="checkbox" value={"4"} />
              <label>
                <span>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</span>
              </label>
            </div>
            <div>
              <input type="checkbox" value={"5"} />
              <label>
                <span>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h4 className="sub-head">By Color</h4>
          <div className="filter filter-color">
            <div>
              <input type="checkbox" />
              <div className="color black"></div>
              <label>Black</label>
            </div>
            <div>
              <input type="checkbox" />
              <div className="color red"></div>
              <label>Red</label>
            </div>
            <div>
              <input type="checkbox" />
              <div className="color green"></div>
              <label>green</label>
            </div>
            <div>
              <input type="checkbox" />
              <div className="color brown"></div>
              <label>Brown</label>
            </div>
            <div>
              <input type="checkbox" />
              <div className="color blue"></div>
              <label>Blue</label>
            </div>
            <div>
              <input type="checkbox" />
              <div className="color orange"></div>
              <label>orange</label>
            </div>
            <div>
              <input type="checkbox" />
              <div className="color gray"></div>
              <label>gray</label>
            </div>
            <div>
              <input type="checkbox" />
              <div className="color pink"></div>
              <label>Pink</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
