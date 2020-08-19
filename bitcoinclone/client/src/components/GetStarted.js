import React, {Component} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class GetStarted extends Component{

	render(){
		return(
			<div className='GetStarted' style={{paddingTop: "5%"}}>
				<h1 style={{textAlign:"center"}}>Welcome to the Block Chain!</h1>
				<div style={{paddingTop: "5%",paddingLeft:"10%", paddingRight:"10%"}}>
					<h2>The cryptocurrencies are the future</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dignissim ligula. Aliquam ultrices nunc eros, at pellentesque urna varius ullamcorper. Ut in commodo odio. Duis laoreet, nibh interdum tincidunt laoreet, urna libero congue ipsum, et condimentum sapien massa vel dui. Nulla congue urna at elit suscipit tempor. Maecenas quis pellentesque felis, et pharetra arcu. Suspendisse ullamcorper bibendum nulla, et sagittis enim convallis sit amet. Aliquam tincidunt eu sem non convallis. Suspendisse tincidunt ex sed pellentesque mattis. Ut commodo sed sapien nec facilisis. Nullam quis mi et ligula feugiat vestibulum. Proin condimentum, lacus ac egestas fermentum, metus enim fermentum ante, ac ullamcorper arcu lorem vitae diam. Duis porta justo urna. Nunc laoreet elit neque, aliquet placerat massa aliquam nec. Mauris euismod orci felis, eu convallis libero varius vitae. Phasellus luctus ex et imperdiet efficitur.

						Curabitur faucibus libero ipsum. Curabitur sit amet dictum nunc. Curabitur sit amet eros molestie mi vestibulum elementum sed non urna. Quisque mattis enim a nisi pharetra faucibus. Morbi eget venenatis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam facilisis sed diam in molestie. Quisque lacinia magna nulla, sed consectetur nunc mollis egestas. Phasellus arcu libero, pulvinar sit amet ornare eu, finibus sed massa. Mauris hendrerit iaculis ex, vel pharetra lectus pharetra vel. Morbi varius orci vel ipsum lobortis euismod.

						Phasellus sed lorem cursus, dapibus lorem eget, egestas massa. Ut vitae ante dui. Mauris pulvinar in massa id rhoncus. Suspendisse et ante ante. Suspendisse potenti. Fusce posuere facilisis turpis nec tincidunt. Aliquam eget lectus at tortor aliquet finibus. Vivamus posuere metus vitae elit luctus eleifend. Nullam id purus et dolor pharetra elementum. Nulla id neque quis lorem luctus molestie sed at dui. Donec eget diam dapibus, ultricies leo vitae, rhoncus lorem. Phasellus interdum malesuada nibh in efficitur. Morbi et quam augue.

						Maecenas non urna velit. Donec at congue tellus. Donec bibendum eros a magna accumsan, ut tincidunt tellus sagittis. Donec rutrum justo et pharetra elementum. Suspendisse dolor tellus, dictum consequat laoreet in, mattis sit amet orci. Pellentesque facilisis sed sapien eu gravida. Cras ullamcorper lobortis felis et semper.

						Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean cursus viverra ligula, et faucibus diam sodales in. Praesent porta felis quis blandit ultrices. Sed varius arcu faucibus ligula pellentesque pharetra. Mauris pharetra urna quis mi convallis pharetra eu sit amet odio. Aenean sagittis nisi eu lacinia placerat. Nulla imperdiet lacus et porta mattis. Praesent magna magna, tempus et pulvinar vitae, elementum a mi. Vivamus vel consequat nisl, et fringilla mi. Vivamus a scelerisque sem. Ut vehicula leo vel risus auctor, ac dignissim nunc tristique. </p>
				</div>
				<div id="mine" style={{paddingTop: "5%",paddingLeft:"10%", paddingRight:"10%"}}>
					<h2>Mine transactions</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dignissim ligula. Aliquam ultrices nunc eros, at pellentesque urna varius ullamcorper. Ut in commodo odio. Duis laoreet, nibh interdum tincidunt laoreet, urna libero congue ipsum, et condimentum sapien massa vel dui. Nulla congue urna at elit suscipit tempor. Maecenas quis pellentesque felis, et pharetra arcu. Suspendisse ullamcorper bibendum nulla, et sagittis enim convallis sit amet. Aliquam tincidunt eu sem non convallis. Suspendisse tincidunt ex sed pellentesque mattis. Ut commodo sed sapien nec facilisis. Nullam quis mi et ligula feugiat vestibulum. Proin condimentum, lacus ac egestas fermentum, metus enim fermentum ante, ac ullamcorper arcu lorem vitae diam. Duis porta justo urna. Nunc laoreet elit neque, aliquet placerat massa aliquam nec. Mauris euismod orci felis, eu convallis libero varius vitae. Phasellus luctus ex et imperdiet efficitur.

						Curabitur faucibus libero ipsum. Curabitur sit amet dictum nunc. Curabitur sit amet eros molestie mi vestibulum elementum sed non urna. Quisque mattis enim a nisi pharetra faucibus. Morbi eget venenatis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam facilisis sed diam in molestie. Quisque lacinia magna nulla, sed consectetur nunc mollis egestas. Phasellus arcu libero, pulvinar sit amet ornare eu, finibus sed massa. Mauris hendrerit iaculis ex, vel pharetra lectus pharetra vel. Morbi varius orci vel ipsum lobortis euismod.

						Phasellus sed lorem cursus, dapibus lorem eget, egestas massa. Ut vitae ante dui. Mauris pulvinar in massa id rhoncus. Suspendisse et ante ante. Suspendisse potenti. Fusce posuere facilisis turpis nec tincidunt. Aliquam eget lectus at tortor aliquet finibus. Vivamus posuere metus vitae elit luctus eleifend. Nullam id purus et dolor pharetra elementum. Nulla id neque quis lorem luctus molestie sed at dui. Donec eget diam dapibus, ultricies leo vitae, rhoncus lorem. Phasellus interdum malesuada nibh in efficitur. Morbi et quam augue.

						Maecenas non urna velit. Donec at congue tellus. Donec bibendum eros a magna accumsan, ut tincidunt tellus sagittis. Donec rutrum justo et pharetra elementum. Suspendisse dolor tellus, dictum consequat laoreet in, mattis sit amet orci. Pellentesque facilisis sed sapien eu gravida. Cras ullamcorper lobortis felis et semper.

						Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean cursus viverra ligula, et faucibus diam sodales in. Praesent porta felis quis blandit ultrices. Sed varius arcu faucibus ligula pellentesque pharetra. Mauris pharetra urna quis mi convallis pharetra eu sit amet odio. Aenean sagittis nisi eu lacinia placerat. Nulla imperdiet lacus et porta mattis. Praesent magna magna, tempus et pulvinar vitae, elementum a mi. Vivamus vel consequat nisl, et fringilla mi. Vivamus a scelerisque sem. Ut vehicula leo vel risus auctor, ac dignissim nunc tristique. </p>
				</div>
				<div id="send" style={{paddingTop: "5%",paddingLeft:"10%", paddingRight:"10%"}}>
					<h2>Send or recive currency</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dignissim ligula. Aliquam ultrices nunc eros, at pellentesque urna varius ullamcorper. Ut in commodo odio. Duis laoreet, nibh interdum tincidunt laoreet, urna libero congue ipsum, et condimentum sapien massa vel dui. Nulla congue urna at elit suscipit tempor. Maecenas quis pellentesque felis, et pharetra arcu. Suspendisse ullamcorper bibendum nulla, et sagittis enim convallis sit amet. Aliquam tincidunt eu sem non convallis. Suspendisse tincidunt ex sed pellentesque mattis. Ut commodo sed sapien nec facilisis. Nullam quis mi et ligula feugiat vestibulum. Proin condimentum, lacus ac egestas fermentum, metus enim fermentum ante, ac ullamcorper arcu lorem vitae diam. Duis porta justo urna. Nunc laoreet elit neque, aliquet placerat massa aliquam nec. Mauris euismod orci felis, eu convallis libero varius vitae. Phasellus luctus ex et imperdiet efficitur.

						Curabitur faucibus libero ipsum. Curabitur sit amet dictum nunc. Curabitur sit amet eros molestie mi vestibulum elementum sed non urna. Quisque mattis enim a nisi pharetra faucibus. Morbi eget venenatis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam facilisis sed diam in molestie. Quisque lacinia magna nulla, sed consectetur nunc mollis egestas. Phasellus arcu libero, pulvinar sit amet ornare eu, finibus sed massa. Mauris hendrerit iaculis ex, vel pharetra lectus pharetra vel. Morbi varius orci vel ipsum lobortis euismod.

						Phasellus sed lorem cursus, dapibus lorem eget, egestas massa. Ut vitae ante dui. Mauris pulvinar in massa id rhoncus. Suspendisse et ante ante. Suspendisse potenti. Fusce posuere facilisis turpis nec tincidunt. Aliquam eget lectus at tortor aliquet finibus. Vivamus posuere metus vitae elit luctus eleifend. Nullam id purus et dolor pharetra elementum. Nulla id neque quis lorem luctus molestie sed at dui. Donec eget diam dapibus, ultricies leo vitae, rhoncus lorem. Phasellus interdum malesuada nibh in efficitur. Morbi et quam augue.

						Maecenas non urna velit. Donec at congue tellus. Donec bibendum eros a magna accumsan, ut tincidunt tellus sagittis. Donec rutrum justo et pharetra elementum. Suspendisse dolor tellus, dictum consequat laoreet in, mattis sit amet orci. Pellentesque facilisis sed sapien eu gravida. Cras ullamcorper lobortis felis et semper.

						Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean cursus viverra ligula, et faucibus diam sodales in. Praesent porta felis quis blandit ultrices. Sed varius arcu faucibus ligula pellentesque pharetra. Mauris pharetra urna quis mi convallis pharetra eu sit amet odio. Aenean sagittis nisi eu lacinia placerat. Nulla imperdiet lacus et porta mattis. Praesent magna magna, tempus et pulvinar vitae, elementum a mi. Vivamus vel consequat nisl, et fringilla mi. Vivamus a scelerisque sem. Ut vehicula leo vel risus auctor, ac dignissim nunc tristique. </p>
				</div>
				<div id="visualize" style={{paddingTop: "5%",paddingLeft:"10%", paddingRight:"10%", paddingBottom:"5%"}}>
					<h2>Visualize the Block Chain</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dignissim ligula. Aliquam ultrices nunc eros, at pellentesque urna varius ullamcorper. Ut in commodo odio. Duis laoreet, nibh interdum tincidunt laoreet, urna libero congue ipsum, et condimentum sapien massa vel dui. Nulla congue urna at elit suscipit tempor. Maecenas quis pellentesque felis, et pharetra arcu. Suspendisse ullamcorper bibendum nulla, et sagittis enim convallis sit amet. Aliquam tincidunt eu sem non convallis. Suspendisse tincidunt ex sed pellentesque mattis. Ut commodo sed sapien nec facilisis. Nullam quis mi et ligula feugiat vestibulum. Proin condimentum, lacus ac egestas fermentum, metus enim fermentum ante, ac ullamcorper arcu lorem vitae diam. Duis porta justo urna. Nunc laoreet elit neque, aliquet placerat massa aliquam nec. Mauris euismod orci felis, eu convallis libero varius vitae. Phasellus luctus ex et imperdiet efficitur.

						Curabitur faucibus libero ipsum. Curabitur sit amet dictum nunc. Curabitur sit amet eros molestie mi vestibulum elementum sed non urna. Quisque mattis enim a nisi pharetra faucibus. Morbi eget venenatis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam facilisis sed diam in molestie. Quisque lacinia magna nulla, sed consectetur nunc mollis egestas. Phasellus arcu libero, pulvinar sit amet ornare eu, finibus sed massa. Mauris hendrerit iaculis ex, vel pharetra lectus pharetra vel. Morbi varius orci vel ipsum lobortis euismod.

						Phasellus sed lorem cursus, dapibus lorem eget, egestas massa. Ut vitae ante dui. Mauris pulvinar in massa id rhoncus. Suspendisse et ante ante. Suspendisse potenti. Fusce posuere facilisis turpis nec tincidunt. Aliquam eget lectus at tortor aliquet finibus. Vivamus posuere metus vitae elit luctus eleifend. Nullam id purus et dolor pharetra elementum. Nulla id neque quis lorem luctus molestie sed at dui. Donec eget diam dapibus, ultricies leo vitae, rhoncus lorem. Phasellus interdum malesuada nibh in efficitur. Morbi et quam augue.

						Maecenas non urna velit. Donec at congue tellus. Donec bibendum eros a magna accumsan, ut tincidunt tellus sagittis. Donec rutrum justo et pharetra elementum. Suspendisse dolor tellus, dictum consequat laoreet in, mattis sit amet orci. Pellentesque facilisis sed sapien eu gravida. Cras ullamcorper lobortis felis et semper.

						Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean cursus viverra ligula, et faucibus diam sodales in. Praesent porta felis quis blandit ultrices. Sed varius arcu faucibus ligula pellentesque pharetra. Mauris pharetra urna quis mi convallis pharetra eu sit amet odio. Aenean sagittis nisi eu lacinia placerat. Nulla imperdiet lacus et porta mattis. Praesent magna magna, tempus et pulvinar vitae, elementum a mi. Vivamus vel consequat nisl, et fringilla mi. Vivamus a scelerisque sem. Ut vehicula leo vel risus auctor, ac dignissim nunc tristique. </p>
				</div>
			</div>
		)
	}
}

export default GetStarted;