json.extract! wheel_deflection, :id, :name, :description, :tire_width, :tire_width_unit, 
				:compression_modulus, :compression_modulus_unit, :load_on_wheel, :load_on_wheel_unit,
          		:outside_radius, :outside_radius_unit, :tread_thicknes, :tread_thickness_unit, 
          		:created_at, :updated_at
json.url wheel_deflection_url(wheel_deflection, format: :json)
