class Review < ApplicationRecord
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to( :carlisting,{
        primary_key: :id,
        foreign_key: :carlisting_id,
        class_name: :Carlisting
    })
end