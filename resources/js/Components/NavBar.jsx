import '@maicol07/material-web-additions/layout-grid/layout-grid'
import '@material/web/button/outlined-link-button'

export default function NavBar(props) {

    const buttons = props.buttons?.map(button =>
        <md-outlined-link-button key={button.id} label={button.label} href={button.href}></md-outlined-link-button>
    );

    return (
        <nav>
            <md-layout-grid>
                <div id="nav-profile" grid-span={5}>
                    <img className="profile" src={props.src} alt="Personal image"/>
                    <h1>{props.name}</h1>
                </div>
                <div grid-span={7} grid-align="middle">
                    {buttons}
                </div>
            </md-layout-grid>
        </nav>
    )
}
