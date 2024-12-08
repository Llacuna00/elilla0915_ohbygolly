function ShopItem(props){
	if(props.orient === 'desc'){
		return (
		<div className='shop-item-wrapper'>
			<a href={props.to}>
				{props.children}
				<img src={props.src} className='shop-item-img' />
			</a>
		</div>);
	}
	return (
		<div className='shop-item-wrapper'>
			<a href={props.to}>
				<img src={props.src} className='shop-item-img' />
				{props.children}
			</a>
		</div>);
}

export default ShopItem;
