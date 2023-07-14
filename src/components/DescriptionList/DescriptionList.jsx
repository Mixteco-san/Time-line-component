export const DescripcionList = ({list}) => (
    <ul>
        {list.map(task => (
            <li key={task.order}>
                {task.description}
            </li>
        ))}    
    </ul>
)