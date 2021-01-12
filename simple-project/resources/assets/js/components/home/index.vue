<template>
            <div class="bg-cover">
                <div class="l-header">
                    <nav class="l-header__inner navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">{{$t('home.project-title')}}</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">{{$t('home.concept-label')}}</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{$t('home.service-label')}}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">{{$t('home.service-name1')}}</a></li>
                                <li><a class="dropdown-item" href="#">{{$t('home.service-name2')}}</a></li>
                                <li><a class="dropdown-item" href="#">{{$t('home.service-name3')}}</a></li>
                                <li><a class="dropdown-item" href="#">{{$t('home.service-name4')}}</a></li>
                                <li><a class="dropdown-item" href="#">{{$t('home.service-name5')}}</a></li>
                                <li><a class="dropdown-item" href="#">{{$t('home.service-name6')}}</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
 
                <div class="container p-hero">
                    <div class="row p-hero__container">
                        <div class="hero-message col-sm-8 offset-sm-2 col-10 offset-1">
                            <h1>{{$t('home.hero-message1')}}</h1>
                        </div>
                        <div class="hero-message col-sm-8 offset-sm-2 col-10 offset-1">
                            <h1>{{$t('home.hero-message2')}}</h1>
                        </div>
                        <div class="hero-message col-sm-8 offset-sm-2 col-10 offset-1">
                            <h1>{{$t('home.hero-message3')}}</h1>
                        </div>
                    </div>
                    <img src="image/circle-hero.png" alt="">
                    <div class="p-hero__sub-circle"></div>
                </div>

                <div class="container p-services">
                     <div class="col-md-6 offset-md-3">
                        <h2>{{$t('home.service-label')}}</h2>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-3 col-6 p-services__item">
                            <a href="">
                                <img src="image/circle-red.png" alt="">
                                <p>{{$t('home.service-name1')}}</p>
                            </a>
                        </div>
                        <div class="col-md-3 col-6 p-services__item">
                            <a href="">
                                <img src="image/circle-blue.png" alt="">
                                <p>{{$t('home.service-name2')}}</p>
                            </a>
                        </div>
                        <div class="col-md-3 col-6 p-services__item">
                            <a href="">
                                <img src="image/circle-yellow.png" alt="">
                                <p>{{$t('home.service-name3')}}</p>
                            </a>
                        </div>
                        <div class="breakpoint-grid"></div>
                        <div class="col-md-3 col-6 p-services__item">
                            <a href="">
                                <img src="image/circle-green.png" alt="">
                                <p>{{$t('home.service-name4')}}</p>
                            </a>
                        </div>
                        <div class="col-md-3 col-6 p-services__item">
                            <a href="">
                                <img src="image/circle-purple.png" alt="">
                                <p>{{$t('home.service-name5')}}</p>
                            </a>
                        </div>
                        <div class="col-md-3 col-6 p-services__item">
                            <a href="">
                                <img src="image/circle-brown.png" alt="">
                                <p>{{$t('home.service-name6')}}</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="container p-concept">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <h2>{{$t('home.concept-label')}}</h2>
                        </div>
                        <h3>{{$t('home.concept-title')}}</h3>                        
                        <p>{{$t('home.concept-message1')}}</p>
                        <p>{{$t('home.concept-message2')}}</p>
                        <p>{{$t('home.concept-message3')}}</p>
                        <p>{{$t('home.concept-message4')}}</p>
                        <p>{{$t('home.concept-message5')}}</p>
                        <p>{{$t('home.concept-message6')}}</p>
                    </div>
                </div>

                <div class="container footer">
                    <p>&copy;{{$t('home.project-title')}}</p>
                </div>
            </div>
</template>

<script>
export default {
}
</script>