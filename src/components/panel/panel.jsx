import React from 'react';

const renderSingleItem = item => (
    <li key={item.login}>
        {item.login
}
    </li>
);

const renderItems = items => (
    <ul>
        {items.map(renderSingleItem)
}
    </ul>
);

const Panel = ({items}) => (
    <div>
        {items.length > 0
            ? renderItems(items)
            : 'No Items'
}
    </div>
)

export default Panel;