class Review < ApplicationRecord
    validate :review_format

    def review_format
        if body.length < 5
            errors[:body] << "too short"
        elsif body.length > 600
            errors[:body] << "too long"
        end
    end

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
