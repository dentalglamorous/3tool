Rails.application.routes.draw do

  resources :wheel_deflections
  get 'home/index'
  get 'home/about'

  get '*path', to: 'home#index'
  root to: 'home#index'
end
