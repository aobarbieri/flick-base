import React from 'react';

const Loading = () => (
	<div className='w-full h-screen bg-black grid place-items-center'>
		<h1>
			<svg
				style={{
					margin: 'auto',
					background: 'none',
					display: 'block',
					shapeRendering: 'auto',
					width: '50vmin',
					height: '50vmin',
				}}
				viewBox='0 0 100 100'
				preserveAspectRatio='xMidYMid'
			>
				<g>
					<circle cx='60' cy='50' r='4' fill='#ff8827'>
						<animate
							attributeName='cx'
							repeatCount='indefinite'
							dur='0.9615384615384615s'
							values='95;35'
							keyTimes='0;1'
							begin='-0.6968000000000001s'
						></animate>
						<animate
							attributeName='fill-opacity'
							repeatCount='indefinite'
							dur='0.9615384615384615s'
							values='0;1;1'
							keyTimes='0;0.2;1'
							begin='-0.6968000000000001s'
						></animate>
					</circle>
					<circle cx='60' cy='50' r='4' fill='#ff8827'>
						<animate
							attributeName='cx'
							repeatCount='indefinite'
							dur='0.9615384615384615s'
							values='95;35'
							keyTimes='0;1'
							begin='-0.3432s'
						></animate>
						<animate
							attributeName='fill-opacity'
							repeatCount='indefinite'
							dur='0.9615384615384615s'
							values='0;1;1'
							keyTimes='0;0.2;1'
							begin='-0.3432s'
						></animate>
					</circle>
					<circle cx='60' cy='50' r='4' fill='#ff8827'>
						<animate
							attributeName='cx'
							repeatCount='indefinite'
							dur='0.9615384615384615s'
							values='95;35'
							keyTimes='0;1'
							begin='0s'
						></animate>
						<animate
							attributeName='fill-opacity'
							repeatCount='indefinite'
							dur='0.9615384615384615s'
							values='0;1;1'
							keyTimes='0;0.2;1'
							begin='0s'
						></animate>
					</circle>
				</g>
				<g transform='translate(-15 0)'>
					<path d='M50 50L20 50A30 30 0 0 0 80 50Z' fill='#ff5126' transform='rotate(90 50 50)'></path>
					<path d='M50 50L20 50A30 30 0 0 0 80 50Z' fill='#ff5126'>
						<animateTransform
							attributeName='transform'
							type='rotate'
							repeatCount='indefinite'
							dur='0.9615384615384615s'
							values='0 50 50;45 50 50;0 50 50'
							keyTimes='0;0.5;1'
						></animateTransform>
					</path>
					<path d='M50 50L20 50A30 30 0 0 1 80 50Z' fill='#ff5126'>
						<animateTransform
							attributeName='transform'
							type='rotate'
							repeatCount='indefinite'
							dur='0.9615384615384615s'
							values='0 50 50;-45 50 50;0 50 50'
							keyTimes='0;0.5;1'
						></animateTransform>
					</path>
				</g>
			</svg>
		</h1>
	</div>
);

export default Loading;
