export default function Footer(props) {
    const {completed, iconList} = props
    return (
        <footer>
            <p>{completed}/8 CONCLUÍDOS</p>
            <div className="icon-list">
                {iconList.map(icon => icon)}
            </div>
        </footer>
    )   
}
