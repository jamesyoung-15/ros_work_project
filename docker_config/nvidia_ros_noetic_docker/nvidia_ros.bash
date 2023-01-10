xhost +local:`docker inspect --format='{{ .Config.Hostname }}' $containerId`

docker run -it --gpus all --privileged --net=host \
	-e DISPLAY=$DISPLAY \
	-e QT_X11_NO_MITSHM=1 \
	-e TERM=xterm-256color \
	--device /dev/video0 \
	--volume="$HOME/Documents/programming/projects/ros/catkin_ws:/home/catkin_ws" \
	--volume="/dev/bus/usb:/dev/bus/usb" \
	--volume="$HOME/Tools/darknet:/home/darknet" \
	nvidia_ros_noetic
