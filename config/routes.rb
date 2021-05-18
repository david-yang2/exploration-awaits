Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resources :carlistings, except: [:new, :edit] do
      resources :reviews, except: [:new, :edit, :show]
      resources :trips, only: [:show]
    end
    resources :trips, only: [:index, :create]
    resources :bookings, except: [:new, :edit]
    resources :users, except: [:new, :edit]
    resource :session, only: [:new, :create, :destroy]
  end
  
end
