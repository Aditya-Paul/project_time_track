

    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {

        setStartTime(performance.now());

        return () => {

            setEndTime(performance.now());
            calculateElapsedTime();

        };

    }, []);

    const calculateElapsedTime = () => {

        const elapsedSeconds = (endTime - startTime) / 1000; 
        setElapsedTime(elapsedSeconds.toFixed(2));

    }