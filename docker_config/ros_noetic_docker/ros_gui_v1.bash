xhost local:root

docker run -it \
    --env="DISPLAY" \
    --env="QT_X11_NO_MITSHM=1" \
    	--volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" \
	--volume="/dev/bus/usb:/dev/bus/usb" \
	--device /dev/video0 \
	--volume="$HOME/Documents/programming/projects/ros/ros_ws:/home/ros_ws" \
	--net=host \
	ros-noetic-build
