<template>
	<div>
		<top-sidebar/>
		
		<div class="header-spacer"></div>
		
		<div class="container">
			<div class="row">
				<div class="col col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="clients-grid">

						<ul class="cat-list-bg-style align-center sorting-menu">
							<li class="cat-list__item active" data-filter="*"><a href="#" class="">综合广场</a></li>
							<li class="cat-list__item" data-filter=".video"><a href="#" class="">视频广场</a></li>
							<li class="cat-list__item" data-filter=".picture"><a href="#" class="">图片广场</a></li>
							<li class="cat-list__item" data-filter=".recom"><a href="#" class="">推荐</a></li>
							<li class="cat-list__item" data-filter=".hot"><a href="#" class="">热门</a></li>
							<li class="cat-list__item" data-filter=".tag"><a href="#" class="">标签</a></li>
						</ul>

						<div class="row sorting-container" id="clients-grid-1" data-layout="masonry">

							<div ref="a" @click="get" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item recom picture">
								 <BlogItem/>
							</div>

							<div ref="b" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item worlds tag video">

								<div class="ui-block">
									
									<article class="hentry post has-post-thumbnail">
									
										<div class="post__author author vcard inline-items">
											<img src="static/img/avatar5-sm.jpg" alt="author">
									
											<div class="author-date">
												<a class="h6 post__author-name fn" href="#">Green Goo Rock</a>
												<div class="post__date">
													<time class="published" datetime="2004-07-24T18:18">
														March 8 at 6:42pm
													</time>
												</div>
											</div>
									
											<div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
												<ul class="more-dropdown">
													<li>
														<a href="#">Edit Post</a>
													</li>
													<li>
														<a href="#">Delete Post</a>
													</li>
													<li>
														<a href="#">Turn Off Notifications</a>
													</li>
													<li>
														<a href="#">Select as Featured</a>
													</li>
												</ul>
											</div>
									
										</div>
									
										<p>Hey guys! We are gona be playing this Saturday of <a href="#">The Marina Bar</a> for their new Mystic Deer Party.
											If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!
										</p>
									
										<div class="post-thumb">
											<img src="static/img/post__thumb1.jpg" alt="photo">
										</div>
									
										<div class="post-additional-info inline-items">
									
											<a href="#" class="post-add-icon inline-items">
												<svg class="olymp-heart-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
												<span>49</span>
											</a>
									
											<ul class="friends-harmonic">
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic9.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic10.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic7.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic8.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic11.jpg" alt="friend">
													</a>
												</li>
											</ul>
									
											<div class="names-people-likes">
												<a href="#">Jimmy</a>, <a href="#">Andrea</a> and
												<br>47 more liked this
											</div>
									
									
											<div class="comments-shared">
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-speech-balloon-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
													<span>264</span>
												</a>
									
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-share-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
													<span>37</span>
												</a>
											</div>
									
									
										</div>
									
										<div class="control-block-button post-control-button">
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-like-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-comments-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-share-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
											</a>
									
										</div>
									
									</article>
								</div>
							</div>

							<div ref="c" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item tag hot picture video">

								<div class="ui-block">

									
									<article class="hentry post">
									
										<div class="post__author author vcard inline-items">
											<img src="static/img/avatar10-sm.jpg" alt="author">
									
											<div class="author-date">
												<a class="h6 post__author-name fn" href="#">Elaine Dreyfuss</a>
												<div class="post__date">
													<time class="published" datetime="2004-07-24T18:18">
														9 hours ago
													</time>
												</div>
											</div>
									
											<div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
												<ul class="more-dropdown">
													<li>
														<a href="#">Edit Post</a>
													</li>
													<li>
														<a href="#">Delete Post</a>
													</li>
													<li>
														<a href="#">Turn Off Notifications</a>
													</li>
													<li>
														<a href="#">Select as Featured</a>
													</li>
												</ul>
											</div>
									
										</div>
									
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut
											labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.
										</p>
									
										<div class="post-additional-info inline-items">
									
											<a href="#" class="post-add-icon inline-items">
												<svg class="olymp-heart-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
												<span>24</span>
											</a>
									
											<ul class="friends-harmonic">
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic7.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic8.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic9.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic10.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic11.jpg" alt="friend">
													</a>
												</li>
											</ul>
									
											<div class="names-people-likes">
												<a href="#">You</a>, <a href="#">Elaine</a> and
												<br>22 more liked this
											</div>
									
									
											<div class="comments-shared">
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-speech-balloon-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
													<span>17</span>
												</a>
									
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-share-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
													<span>24</span>
												</a>
											</div>
									
									
										</div>
									
										<div class="control-block-button post-control-button">
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-like-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-comments-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-share-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
											</a>
									
										</div>
									
									</article>
									
									<!-- Comments -->
									
									<ul class="comments-list">
										<li class="comment-item">
											<div class="post__author author vcard inline-items">
												<img src="static/img/author-page.jpg" alt="author">
									
												<div class="author-date">
													<a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
													<div class="post__date">
														<time class="published" datetime="2004-07-24T18:18">
															38 mins ago
														</time>
													</div>
												</div>
									
												<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
									
											</div>
									
											<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>
									
											<a href="#" class="post-add-icon inline-items">
												<svg class="olymp-heart-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
												<span>3</span>
											</a>
											<a href="#" class="reply">Reply</a>
										</li>
										<li class="comment-item">
											<div class="post__author author vcard inline-items">
												<img src="static/img/avatar1-sm.jpg" alt="author">
									
												<div class="author-date">
													<a class="h6 post__author-name fn" href="#">Mathilda Brinker</a>
													<div class="post__date">
														<time class="published" datetime="2004-07-24T18:18">
															1 hour ago
														</time>
													</div>
												</div>
									
												<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
									
											</div>
									
											<p>Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
												quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
											</p>
									
											<a href="#" class="post-add-icon inline-items">
												<svg class="olymp-heart-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
												<span>8</span>
											</a>
											<a href="#" class="reply">Reply</a>
										</li>
									</ul>
									
									<!-- ... end Comments -->

									<a href="#" class="more-comments">View more comments <span>+</span></a>

									
									<!-- Comment Form  -->
									
									<form class="comment-form inline-items">
									
										<div class="post__author author vcard inline-items">
											<img src="static/img/author-page.jpg" alt="author">
									
											<div class="form-group with-icon-right ">
												<textarea class="form-control" placeholder=""></textarea>
												<div class="add-options-message">
													<a href="#" class="options-message" data-toggle="modal" data-target="#update-header-photo">
														<svg class="olymp-camera-icon">
															<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
														</svg>
													</a>
												</div>
											</div>
										</div>
									
										<button class="btn btn-md-2 btn-primary">Post Comment</button>
									
										<button class="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Cancel</button>
									
									</form>
									
									<!-- ... end Comment Form  -->
								</div>

							</div>

							<div ref="d" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item worlds recom">

								<div class="ui-block">
									
									<article class="hentry post has-post-thumbnail">
									
										<div class="post__author author vcard inline-items">
											<img src="static/img/avatar2-sm.jpg" alt="author">
									
											<div class="author-date">
												<a class="h6 post__author-name fn" href="#">Nicholas Grissom</a>
												<div class="post__date">
													<time class="published" datetime="2004-07-24T18:18">
														March 2 at 8:34am
													</time>
												</div>
											</div>
									
											<div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
												<ul class="more-dropdown">
													<li>
														<a href="#">Edit Post</a>
													</li>
													<li>
														<a href="#">Delete Post</a>
													</li>
													<li>
														<a href="#">Turn Off Notifications</a>
													</li>
													<li>
														<a href="#">Select as Featured</a>
													</li>
												</ul>
											</div>
									
										</div>
									
										<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
											pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
											mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
											accusantium doloremque.
										</p>
									
										<div class="post-additional-info inline-items">
									
											<a href="#" class="post-add-icon inline-items">
												<svg class="olymp-heart-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
												<span>22</span>
											</a>
									
											<ul class="friends-harmonic">
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic9.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic10.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic7.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic8.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic11.jpg" alt="friend">
													</a>
												</li>
											</ul>
									
											<div class="names-people-likes">
												<a href="#">Jimmy</a>, <a href="#">Andrea</a> and
												<br>47 more liked this
											</div>
									
									
											<div class="comments-shared">
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-speech-balloon-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
													<span>0</span>
												</a>
									
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-share-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
													<span>2</span>
												</a>
											</div>
									
									
										</div>
									
										<div class="control-block-button post-control-button">
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-like-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-comments-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-share-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
											</a>
									
										</div>
									
									</article>
								</div>

							</div>

							<div ref="e"  class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item recom picture">
								<div class="ui-block">
									
									<article class="hentry post video">
									
										<div class="post__author author vcard inline-items">
											<img src="static/img/avatar7-sm.jpg" alt="author">
									
											<div class="author-date">
												<a class="h6 post__author-name fn" href="#">Marina Valentine</a> shared a <a href="#">link</a>
												<div class="post__date">
													<time class="published" datetime="2004-07-24T18:18">
														March 4 at 2:05pm
													</time>
												</div>
											</div>
									
											<div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
												<ul class="more-dropdown">
													<li>
														<a href="#">Edit Post</a>
													</li>
													<li>
														<a href="#">Delete Post</a>
													</li>
													<li>
														<a href="#">Turn Off Notifications</a>
													</li>
													<li>
														<a href="#">Select as Featured</a>
													</li>
												</ul>
											</div>
									
										</div>
									
										<p>Hey <a href="#">Cindi</a>, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!</p>
									
										<div class="post-video">
											<div class="video-thumb">
												<img src="static/img/video-youtube1.jpg" alt="photo">
												<a href="https://youtube.com/watch?v=excVFQ2TWig" class="play-video">
													<svg class="olymp-play-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-play-icon"></use></svg>
												</a>
											</div>
									
											<div class="video-content">
												<a href="#" class="h4 title">Iron Maid - ChillGroves</a>
												<p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt
													ut labore et dolore magna aliqua...
												</p>
												<a href="#" class="link-site">YOUTUBE.COM</a>
											</div>
										</div>
									
										<div class="post-additional-info inline-items">
									
											<a href="#" class="post-add-icon inline-items">
												<svg class="olymp-heart-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
												<span>18</span>
											</a>
									
											<ul class="friends-harmonic">
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic9.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic10.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic7.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic8.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic11.jpg" alt="friend">
													</a>
												</li>
											</ul>
									
											<div class="names-people-likes">
												<a href="#">Jenny</a>, <a href="#">Robert</a> and
												<br>18 more liked this
											</div>
									
											<div class="comments-shared">
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-speech-balloon-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
									
													<span>0</span>
												</a>
									
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-share-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
									
													<span>16</span>
												</a>
											</div>
									
									
										</div>
									
										<div class="control-block-button post-control-button">
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-like-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-comments-post-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-share-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
											</a>
									
										</div>
									
									</article>
								</div>
							</div>

							<div ref="f" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item worlds tag">

								<div class="ui-block">
									<!-- Post -->
									
									<article class="hentry post">
									
										<div class="post__author author vcard inline-items">
											<img src="static/img/author-page.jpg" alt="author">
									
											<div class="author-date">
												<a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
												<div class="post__date">
													<time class="published" datetime="2017-03-24T18:18">
														2 hours ago
													</time>
												</div>
											</div>
									
											<div class="more">
												<svg class="olymp-three-dots-icon">
													<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
												</svg>
												<ul class="more-dropdown">
													<li>
														<a href="#">Edit Post</a>
													</li>
													<li>
														<a href="#">Delete Post</a>
													</li>
													<li>
														<a href="#">Turn Off Notifications</a>
													</li>
													<li>
														<a href="#">Select as Featured</a>
													</li>
												</ul>
											</div>
									
										</div>
									
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
											dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.
										</p>
									
										<div class="post-additional-info inline-items">
									
											<a href="#" class="post-add-icon inline-items">
												<svg class="olymp-heart-icon">
													<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
												</svg>
												<span>36</span>
											</a>
									
											<ul class="friends-harmonic">
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic7.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic8.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic9.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic10.jpg" alt="friend">
													</a>
												</li>
												<li>
													<a href="#">
														<img src="static/img/friend-harmonic11.jpg" alt="friend">
													</a>
												</li>
											</ul>
									
											<div class="names-people-likes">
												<a href="#">You</a>, <a href="#">Elaine</a> and
												<br>34 more liked this
											</div>
									
									
											<div class="comments-shared">
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-speech-balloon-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
													</svg>
													<span>17</span>
												</a>
									
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-share-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
													</svg>
													<span>24</span>
												</a>
											</div>
									
									
										</div>
									
										<div class="control-block-button post-control-button">
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-like-post-icon">
													<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
												</svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-comments-post-icon">
													<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
												</svg>
											</a>
									
											<a href="#" class="btn btn-control">
												<svg class="olymp-share-icon">
													<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
												</svg>
											</a>
									
										</div>
									
									</article>
									
									<!-- .. end Post -->						
								</div>
							</div>

							<div ref="g" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item tag hot picture">

								<div class="ui-block">
									
									<!-- Post -->
									
									<article class="hentry post video">
									
											<div class="post__author author vcard inline-items">
												<img src="static/img/author-page.jpg" alt="author">
									
												<div class="author-date">
													<a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a> shared a
													<a href="#">link</a>
													<div class="post__date">
														<time class="published" datetime="2017-03-24T18:18">
															7 hours ago
														</time>
													</div>
												</div>
									
												<div class="more">
													<svg class="olymp-three-dots-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
													</svg>
													<ul class="more-dropdown">
														<li>
															<a href="#">Edit Post</a>
														</li>
														<li>
															<a href="#">Delete Post</a>
														</li>
														<li>
															<a href="#">Turn Off Notifications</a>
														</li>
														<li>
															<a href="#">Select as Featured</a>
														</li>
													</ul>
												</div>
									
											</div>
									
											<p>If someone missed it, check out the new song by System of a Revenge! I thinks they are going back to their roots...</p>
									
											<div class="post-video">
												<div class="video-thumb">
													<img src="static/img/video5.jpg" alt="photo">
													<a href="https://youtube.com/watch?v=excVFQ2TWig" class="play-video">
														<svg class="olymp-play-icon">
															<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-play-icon"></use>
														</svg>
													</a>
												</div>
									
												<div class="video-content">
													<a href="#" class="h4 title">System of a Revenge - Nothing Else Matters (LIVE)</a>
													<p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempo incididunt ut labore..</p>
													<a href="#" class="link-site">YOUTUBE.COM</a>
												</div>
											</div>
									
											<div class="post-additional-info inline-items">
									
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-heart-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
													</svg>
													<span>15</span>
												</a>
									
												<ul class="friends-harmonic">
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic9.jpg" alt="friend">
														</a>
													</li>
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic10.jpg" alt="friend">
														</a>
													</li>
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic7.jpg" alt="friend">
														</a>
													</li>
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic8.jpg" alt="friend">
														</a>
													</li>
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic11.jpg" alt="friend">
														</a>
													</li>
												</ul>
									
												<div class="names-people-likes">
													<a href="#">Jenny</a>, <a href="#">Robert</a> and
													<br>13 more liked this
												</div>
									
												<div class="comments-shared">
													<a href="#" class="post-add-icon inline-items">
														<svg class="olymp-speech-balloon-icon">
															<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
														</svg>
														<span>1</span>
													</a>
									
													<a href="#" class="post-add-icon inline-items">
														<svg class="olymp-share-icon">
															<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
														</svg>
														<span>16</span>
													</a>
												</div>
									
									
											</div>
									
											<div class="control-block-button post-control-button">
									
												<a href="#" class="btn btn-control">
													<svg class="olymp-like-post-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
													</svg>
												</a>
									
												<a href="#" class="btn btn-control">
													<svg class="olymp-comments-post-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
													</svg>
												</a>
									
												<a href="#" class="btn btn-control">
													<svg class="olymp-share-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
													</svg>
												</a>
									
											</div>
									
										</article>
									
									<!-- .. end Post -->						
								</div>

							</div>

							<div ref="h" class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sorting-item worlds recom">

								<div class="ui-block">
									<!-- Post -->
									
									<article class="hentry post">
									
											<div class="post__author author vcard inline-items">
												<img src="static/img/author-page.jpg" alt="author">
									
												<div class="author-date">
													<a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
													<div class="post__date">
														<time class="published" datetime="2017-03-24T18:18">
															19 hours ago
														</time>
													</div>
												</div>
									
												<div class="more">
													<svg class="olymp-three-dots-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
													</svg>
													<ul class="more-dropdown">
														<li>
															<a href="#">Edit Post</a>
														</li>
														<li>
															<a href="#">Delete Post</a>
														</li>
														<li>
															<a href="#">Turn Off Notifications</a>
														</li>
														<li>
															<a href="#">Select as Featured</a>
														</li>
													</ul>
												</div>
									
											</div>
									
											<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
												pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
												mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
												accusantium doloremque.
											</p>
									
											<div class="post-additional-info inline-items">
									
												<a href="#" class="post-add-icon inline-items">
													<svg class="olymp-heart-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
													</svg>
													<span>8</span>
												</a>
									
												<ul class="friends-harmonic">
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic7.jpg" alt="friend">
														</a>
													</li>
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic8.jpg" alt="friend">
														</a>
													</li>
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic9.jpg" alt="friend">
														</a>
													</li>
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic10.jpg" alt="friend">
														</a>
													</li>
													<li>
														<a href="#">
															<img src="static/img/friend-harmonic11.jpg" alt="friend">
														</a>
													</li>
												</ul>
									
												<div class="names-people-likes">
													<a href="#">Jenny</a>, <a href="#">Robert</a> and
													<br>6 more liked this
												</div>
									
									
												<div class="comments-shared">
													<a href="#" class="post-add-icon inline-items">
														<svg class="olymp-speech-balloon-icon">
															<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
														</svg>
														<span>17</span>
													</a>
									
													<a href="#" class="post-add-icon inline-items">
														<svg class="olymp-share-icon">
															<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
														</svg>
														<span>24</span>
													</a>
												</div>
									
									
											</div>
									
											<div class="control-block-button post-control-button">
									
												<a href="#" class="btn btn-control featured-post">
													<svg class="olymp-trophy-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-trophy-icon"></use>
													</svg>
												</a>
									
												<a href="#" class="btn btn-control">
													<svg class="olymp-like-post-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
													</svg>
												</a>
									
												<a href="#" class="btn btn-control">
													<svg class="olymp-comments-post-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
													</svg>
												</a>
									
												<a href="#" class="btn btn-control">
													<svg class="olymp-share-icon">
														<use xlink:href="static/svg-icons/sprites/icons.svg#olymp-share-icon"></use>
													</svg>
												</a>
									
											</div>
									
										</article>
									
									<!-- .. end Post -->						
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="clients-grid">

						<ul class="cat-list-bg-style align-center sorting-menu">
							<li class="cat-list__item active" data-filter="*"><a href="#" class="">综合广场</a></li>
							<li class="cat-list__item" data-filter=".politics"><a href="#" class="">视频广场</a></li>
							<li class="cat-list__item" data-filter=".natural"><a href="#" class="">图片广场</a></li>
							<li class="cat-list__item" data-filter=".worlds"><a href="#" class="">推荐</a></li>
							<li class="cat-list__item" data-filter=".animals"><a href="#" class="">热门</a></li>
							<li class="cat-list__item" data-filter=".family"><a href="#" class="">标签</a></li>
						</ul>


						<div class="row sorting-container" id="clients-grid" data-layout="masonry">

							<div class="col col-lg-4 col-md-6 col-sm-6 col-12 sorting-item ecommerce natural">
								<div class="ui-block">
									
									<!-- W-Birthsday-Alert -->
									
									<div class="widget w-birthday-alert">
										<div class="icons-block">
											<svg class="olymp-cupcake-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use></svg>
											<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
										</div>
									
										<div class="content">
											<div class="author-thumb">
												<img src="static/img/avatar48-sm.jpg" alt="author">
											</div>
											<span>Today is</span>
											<a href="#" class="h4 title">Marina Valentine’s Birthday!</a>
											<p>Leave her a message with your best wishes on her profile page!</p>
										</div>
									</div>
									
									<!-- ... end W-Birthsday-Alert -->						</div>
							</div>

							<div class="col col-lg-4 col-md-6 col-sm-6 col-12 sorting-item worlds family politics">

								<div class="ui-block">
									<div class="ui-block-title">
										<h6 class="title">Friend Suggestions</h6>
										<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
									</div>
									<!-- W-Friend-Pages-Added -->
									
									<ul class="widget w-friend-pages-added notification-list friend-requests">
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar41-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">The Marina Bar</a>
												<span class="chat-message-item">Restaurant / Bar</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
									
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar42-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Tapronus Rock</a>
												<span class="chat-message-item">Rock Band</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
									
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar43-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Pixel Digital Design</a>
												<span class="chat-message-item">Company</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar44-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Thompson’s Custom Clothing Boutique</a>
												<span class="chat-message-item">Clothing Store</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
									
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar45-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Crimson Agency</a>
												<span class="chat-message-item">Company</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar46-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Mannequin Angel</a>
												<span class="chat-message-item">Clothing Store</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
										</li>
									</ul>
									
									<!-- .. end W-Friend-Pages-Added -->
								</div>
							</div>

							<div class="col col-lg-4 col-md-6 col-sm-6 col-12 sorting-item family animals natural politics">

								<div class="ui-block">

									<div class="ui-block-title">
										<h6 class="title">Activity Feed</h6>
										<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
									</div>

									
									<!-- W-Activity-Feed -->
									
									<ul class="widget w-activity-feed notification-list">
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar49-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Marina Polson</a> commented on Jason Mark’s <a href="#" class="notification-link">photo.</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">2 mins ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar9-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Jake Parker </a> liked Nicholas Grissom’s <a href="#" class="notification-link">status update.</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">5 mins ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar50-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Mary Jane Stark </a> added 20 new photos to her <a href="#" class="notification-link">gallery album.</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">12 mins ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar51-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Nicholas Grissom </a> updated his profile <a href="#" class="notification-link">photo</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">1 hour ago</time></span>
											</div>
										</li>
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar48-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Marina Valentine </a> commented on Chris Greyson’s <a href="#" class="notification-link">status update</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">1 hour ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar52-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Green Goo Rock </a> posted a <a href="#" class="notification-link">status update</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">1 hour ago</time></span>
											</div>
										</li>
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar10-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Elaine Dreyfuss  </a> liked your <a href="#" class="notification-link">blog post</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">2 hours ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar10-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Elaine Dreyfuss  </a> commented on your <a href="#" class="notification-link">blog post</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">2 hours ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar53-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Bruce Peterson </a> changed his <a href="#" class="notification-link">profile picture</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">15 hours ago</time></span>
											</div>
										</li>
									
									</ul>
									
									<!-- .. end W-Activity-Feed -->
								</div>

							</div>

							<div class="col col-lg-4 col-md-6 col-sm-6 col-12 sorting-item worlds ecommerce">

								<div class="ui-block">

									
									<!-- W-Action -->
									
									<div class="widget w-action">
									
										<img src="static/img/logo.png" alt="Olympus">
										<div class="content">
											<h4 class="title">OLYMPUS</h4>
											<span>THE BEST SOCIAL NETWORK THEME IS HERE!</span>
											<a href="01-LandingPage.html" class="btn btn-bg-secondary btn-md">Register Now!</a>
										</div>
									</div>
									
									<!-- ... end W-Action -->
								</div>

							</div>

							<div class="col col-lg-4 col-md-6 col-sm-6 col-12 sorting-item ecommerce natural">
								<div class="ui-block">


								</div>
							</div>

							<div class="col col-lg-4 col-md-6 col-sm-6 col-12 sorting-item worlds family">

								<div class="ui-block">
									<div class="ui-block-title">
										<h6 class="title">Friend Suggestions</h6>
										<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
									</div>

									<!-- W-Friend-Pages-Added -->
									
									<ul class="widget w-friend-pages-added notification-list friend-requests">
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar41-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">The Marina Bar</a>
												<span class="chat-message-item">Restaurant / Bar</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
									
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar42-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Tapronus Rock</a>
												<span class="chat-message-item">Rock Band</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
									
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar43-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Pixel Digital Design</a>
												<span class="chat-message-item">Company</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar44-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Thompson’s Custom Clothing Boutique</a>
												<span class="chat-message-item">Clothing Store</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
									
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar45-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Crimson Agency</a>
												<span class="chat-message-item">Company</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
										</li>
									
										<li class="inline-items">
											<div class="author-thumb">
												<img src="static/img/avatar46-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Mannequin Angel</a>
												<span class="chat-message-item">Clothing Store</span>
											</div>
											<span class="notification-icon" data-toggle="tooltip" data-placement="top" data-original-title="ADD TO YOUR FAVS">
												<a href="#">
													<svg class="olymp-star-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
												</a>
											</span>
										</li>
									</ul>
									
									<!-- .. end W-Friend-Pages-Added -->
								</div>
							</div>

							<div class="col col-lg-4 col-md-6 col-sm-6 col-12 sorting-item family animals natural">

								<div class="ui-block">

									<div class="ui-block-title">
										<h6 class="title">Activity Feed</h6>
										<a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="static/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>
									</div>

									
									<!-- W-Activity-Feed -->
									
									<ul class="widget w-activity-feed notification-list">
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar49-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Marina Polson</a> commented on Jason Mark’s <a href="#" class="notification-link">photo.</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">2 mins ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar9-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Jake Parker </a> liked Nicholas Grissom’s <a href="#" class="notification-link">status update.</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">5 mins ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar50-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Mary Jane Stark </a> added 20 new photos to her <a href="#" class="notification-link">gallery album.</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">12 mins ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar51-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Nicholas Grissom </a> updated his profile <a href="#" class="notification-link">photo</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">1 hour ago</time></span>
											</div>
										</li>
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar48-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Marina Valentine </a> commented on Chris Greyson’s <a href="#" class="notification-link">status update</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">1 hour ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar52-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Green Goo Rock </a> posted a <a href="#" class="notification-link">status update</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">1 hour ago</time></span>
											</div>
										</li>
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar10-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Elaine Dreyfuss  </a> liked your <a href="#" class="notification-link">blog post</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">2 hours ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar10-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Elaine Dreyfuss  </a> commented on your <a href="#" class="notification-link">blog post</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">2 hours ago</time></span>
											</div>
										</li>
									
										<li>
											<div class="author-thumb">
												<img src="static/img/avatar53-sm.jpg" alt="author">
											</div>
											<div class="notification-event">
												<a href="#" class="h6 notification-friend">Bruce Peterson </a> changed his <a href="#" class="notification-link">profile picture</a>.
												<span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">15 hours ago</time></span>
											</div>
										</li>
									
									</ul>
									
									<!-- .. end W-Activity-Feed -->
								</div>

							</div>

							<div class="col col-lg-4 col-md-6 col-sm-6 col-12 sorting-item worlds ecommerce">

								<div class="ui-block">

									
									<!-- W-Action -->
									
									<div class="widget w-action">
									
										<img src="static/img/logo.png" alt="Olympus">
										<div class="content">
											<h4 class="title">OLYMPUS</h4>
											<span>THE BEST SOCIAL NETWORK THEME IS HERE!</span>
											<a href="01-LandingPage.html" class="btn btn-bg-secondary btn-md">Register Now!</a>
										</div>
									</div>
									
									<!-- ... end W-Action -->
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	
	</div>
</template>

<script>
	import BlogItem from './container/mainComponent/blogMain/BlogItem'
	//import TopSidebar from './sidebar/TopSidebar'
	export default {
	  components: {
		BlogItem
	  },
	  methods : {
		  get(e){
			 /* console.log(e)
			  var refs = this.$refs
			  for(var key in refs){
				  console.log(refs[key])
				  if(refs[key].style.cssText.indexOf("left: 50%;")!=-1){
					     console.log(refs[key].style.top)
				  }
			  } */
			//this.$refs.a.style.cssText
		  }
	  }
	}
</script>

<style>
</style>
